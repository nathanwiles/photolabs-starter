const router = require("express").Router();

module.exports = (db) => {
  router.get("/favs", (request, response) => {
    const protocol = request.protocol;
    const host = request.hostname;
    const port = process.env.PORT || 8001;
    const serverUrl = `${protocol}://${host}:${port}`;

    db.query(
      `SELECT json_agg(
        json_build_object(
          'id', photo.id,
          'urls', json_build_object(
              'full', concat('${serverUrl}/images/', photo.full_url),
              'regular', concat('${serverUrl}/images/', photo.regular_url)
          ),
          'user', json_build_object(
              'username', user_account.username,
              'name', user_account.fullname,
              'profile', concat('${serverUrl}/images/', user_account.profile_url)
          ),
          'location', json_build_object(
              'city', photo.city,
              'country', photo.country
          ),
          'similar_photos', (
              SELECT json_agg(
                  json_build_object(
                      'id', similar_photo.id,
                      'urls', json_build_object(
                          'full', concat('${serverUrl}/images/', similar_photo.full_url),
                          'regular', concat('${serverUrl}/images/', similar_photo.regular_url)
                      ),
                      'user', json_build_object(
                          'username', similar_user_account.username,
                          'name', similar_user_account.fullname,
                          'profile', concat('${serverUrl}/images/', similar_user_account.profile_url)
                      ),
                      'location', json_build_object(
                          'city', similar_photo.city,
                          'country', similar_photo.country
                      )
                  )
              )
              FROM photo AS similar_photo
              JOIN user_account AS similar_user_account ON similar_user_account.id = similar_photo.user_id
              WHERE similar_photo.id <> photo.id
              AND similar_photo.topic_id = photo.topic_id
              LIMIT 4
          )
      )
  ) as photo_data
  FROM photo
  JOIN user_account ON user_account.id = photo.user_id
   JOIN FAVPHOTO ON FAVPHOTO.photo_id = photo.id;
    `
    ).then(({ rows }) => {
      response.json(rows[0].photo_data);
    });
  });

  router.delete("/favs/delete/:id", (request, response) => {
    const { id } = request.params;
    db.query(
      `DELETE FROM favphoto WHERE photo_id = $1`,
      [id],
      (error, result) => {
        if (error) {
          response.status(500).json({ error: error.message }); // Internal Server Error
          return;
        }
        response.status(200).json({ message: "Record deleted successfully." });
      }
    );
  });

  router.post("/favs/add/:id", (request, response) => {
    const { id } = request.params;
    db.query(
      `INSERT INTO favphoto (photo_id) VALUES ($1)`,
      [id],
      (error, result) => {
        if (error) {
          response.status(500).json({ error: error.message }); // Internal Server Error
          return;
        }
        response.status(200).json({ message: "Record added successfully." });
      }
    );
  });

  return router;
};
