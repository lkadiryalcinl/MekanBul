var mongoose = require("mongoose");
// local -> mongodb://127.0.0.1:27017/mekanbul
// mongodbcloud -> "mongodb+srv://user:user@cluster0.clwnhsg.mongodb.net/mekanbul"
var dbURI = "mongodb+srv://user:user@cluster0.clwnhsg.mongodb.net/mekanbul";
mongoose.connect(dbURI);

// Bağlantı Olayları (Connection Events)
mongoose.connection.on("connected", () => {
  console.log(dbURI + " adresine bağlandı!");
});

mongoose.connection.on("error", () => {
  console.log("Bağlantı hatası!");
});

mongoose.connection.on("disconnected", () => {
  console.log("Bağlantı kesildi!");
});

process.on("SIGINT", () => {
  mongoose.connection.close();
  console.log("Bağlantı kapatıldı!");
  process.exit(0);
});

require("./venue");
require("./user");