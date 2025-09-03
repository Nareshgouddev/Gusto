const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB()
  .then(() => {
    console.log("Connection is established in DB");
    app.listen(3000, () => {
      console.log("SERVER CONNECTED SUCCESSSFULLY ");
    });
  })
  .catch((err) => {
    console.log("ERROR" + err.message);
  });
