
const PORT = 3001;
const server = require("./app.js");
const { conn } = require("./db.js");

// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server raised in port: " + PORT);// eslint-disable-line no-console
    });
  })
  .catch((error) => console.log(error.message));
