const db = require('./db/connection.js');
const routes = require('./routes/incidentRouter.js');


const app = routes;

const PORT =  process.env.PORT || 8080;


db.on("connected", () => {
  console.clear();
  console.log("Connecting to MongoDB!");
  app.listen(PORT, () => {
    console.log(
      `Express server running in development on: http://localhost:${PORT}`
    );
  });
});

db.on('error', error => console.error("error connecting to server\n" + error));
db.on('listening', () => console.log("yeah we really connected ze doublecheck" + PORT));