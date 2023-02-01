const exrpess = require("express");
const mongoose = require("mongoose");
const User = require("./User");
const app = exrpess();
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://saif:1234@cluster.9gw9v1g.mongodb.net/?retryWrites=true&w=majority"
);

// async function start() {
//   const person = await User.create({
//     name: "saif",
//     age: 25,
//     favoriteFoods: ["Pizza"],
//   });
// }
// start();
//////////////////////////////////////////////////////////////////////////
// async function start() {
//   const arrayOfPeople = [
//     { name: "S1", age: 1, favoriteFoods: "F1" },
//     { name: "S2", age: 2, favoriteFoods: "F2" },
//     { name: "S3", age: 3, favoriteFoods: "F3" },
//   ];
//   await User.create(arrayOfPeople);
// }
// start();
///////////////////////////////////////////////////////////////////////////////////

// async function start() {
//   const people = await User.find();
//   console.log(people);
// }
// start();
////////////////////////////////////////////////////////////////////////
// async function start() {
//   const person = await User.findOne({ name: "saif" });
//   console.log(person);
// }
// start();
////////////////////////////////////////////////////////////////
// async function start() {
//   const person = await User.findById("63dab62fad2d5631cd1ebe44");
//   console.log(person);
// }
// start();
////////////////////////////////////////////////////////////////////
// async function start() {
//   await User.findByIdAndUpdate("63dab62fad2d5631cd1ebe44", {
//     $push: { favoriteFoods: "Juice" },
//   });
// }
// start();
///////////////////////////////////////////////////////////////////////////
// async function start() {
//   await User.findOneAndUpdate({ name: "saif" }, { age: 20 }, { new: true });
// }
// start();
////////////////////////////////////////////////////////////

// async function start() {
//   await User.findByIdAndRemove("63dabbacd3986c676bf4056a");
// }
// start();
////////////////////////////////////////////////////////////////
// async function start() {
//   await User.remove({ name: "S3" });
// }
// start();
////////////////////////////////////////////////////////////////
// async function start() {
//   const specificSearch = await User.find({ favoriteFoods: "Pizza" })
//     .sort({
//       age: 1,
//     })
//     .limit(1)
//     .select("name");
//   console.log(specificSearch);
// }
// start();
//////////////////////////////////////////////////////////////////////////////////
app.listen(5000, () => {
  console.log("server is running");
});
