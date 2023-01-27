const exrpess = require("express");
const mongoose = require("mongoose");
const User = require("./User");
const app = exrpess();
mongoose.set("strictQuery", false);

mongoose.connect(
  "mongodb+srv://saif:1234@cluster.9gw9v1g.mongodb.net/?retryWrites=true&w=majority"
);

// const person1 = User.create({ name: "saif", age: 25, hobbies: ["Swimming"] });
// const person2 = new User({ name: "saif", age: 25, hobbies: ["Swimming"] });
// person2.save();

async function start() {
  //   const person1 = await User.create({
  //     name: "saif",
  //     age: 27,
  //     hobbies: ["Swimming"]
  //   });
  //   const users = await User.find({ name: "saif" });
  //   console.log(users);
  //   const person2 = await User.findById("63d42894db9d14e4508f694b");
  //   console.log(person2);
  //   const user = await User.findOne({ name: "saif" });
  //   console.log(user);
  //   await User.deleteMany({ name: "saif" });

  const updatedPerson = await User.findByIdAndUpdate(
    "63d42a71f9ed225329838e29",
    { name: "amine", hobbies: "Football" }
  );
  console.log(updatedPerson);
}

start();

app.listen(5000, () => {
  console.log("server is running");
});
