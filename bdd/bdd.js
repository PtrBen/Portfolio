//On crée une base de données.
 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database mydb created!");
//   db.close();
// });

// On crée une collection "expPro" dans cette base de données.
// var url = "mongodb://localhost:27017/";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("expPro", function(err, res) {
//     if (err) throw err;
//     console.log("Collection expPro created!");
//     db.close();
//   });
// });

// On insert des données dans la collection "expPro".
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("expPro");
//   var xp = [
//     { denomination: "Formation développeur web", date: "Décembre 2017 à Juillet 2018", description: "J'ai trouvé cette formation en développement web chez AFORMAC, j'y apprend html, css, sass, js, php... Aujourd'hui je fini mon stage et mon projet en nodejs, je souhaite en apprendre d'avantage sur cette technologie."},
//     { denomination: "Accompagnateur scolaire", date: "Octobre à Décembre 2017", description: "Suite à une décision de réorientation professionnel j'ai participé à l'accompagnement de jeunes en temps partiel le temps de trouver quelque chose dans le développement."},
//     { denomination: "Assistant magasin", date: "2014 - 2016", description: "Lors de mon BTS en alternance j'ai eu l'occasion de travailler en supermarché durant deux ans. Riches en expériences cela m'a permis d'en apprendre d'avantage sur le commerce et la gestion d'un point de vente de cet envergure."}
//   ];
//   dbo.collection("expPro").insertMany(xp, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });

//On supprime la collection expPro (commentaire car supprime automatiquement sinon.)
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("visualdnb");
//   dbo.collection("administration").drop(function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });

// On affiche dans le terminal notre bdd.
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("expPro").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
