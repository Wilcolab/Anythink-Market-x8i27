//TODO: seeds script should come here, so we'll be able to put some data in our local env
const mongoose = require("mongoose");

require("../models/User");
require("../models/Item");
require("../models/Comment");

const User = mongoose.model("User");
const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment");

if (!process.env.MONGODB_URI) {
  console.warn("Missing MONGODB_URI in env, please add it to your .env file");
}

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("\n\nConnection Open\n\n");
  })
  .catch((err) => {
    console.log("\n\n" + err + "\n\n");
  });

const seedDB = async () => {
  //Creating 100 records
  for (let itr = 0; itr < 100; itr++) {
    const seedUser = {
      username: `user${itr}`,
      email: `user${itr}@gmail.com`,
      bio: `SDE ${itr}`,
      image:
        "https://i1.wp.com/media.globalnews.ca/videostatic/353/499/oldestmanthumb.jpg?w=1040&quality=70&strip=all",
    };

    let userID = null;
    const user = new User(seedUser);
    await user.save((err, record) => {
      userID = record.id;
    });

    const seedItem = {
      slug: `Product${itr}-${userID}`,
      title: `Product${itr}`,
      description: `User Specialist Product`,
      image: `https://random.imagecdn.app/360/360`,
      comments: [],
      tagList: ["seeding"],
      seller: userID,
    };

    let itemID = null;
    const item = new Item(seedItem);
    await item.save((err, record) => {
      itemID = record.id;
    });

    const seedComment = {
      body: "Fake Product, Bad Service",
      seller: userID,
      item: itemID,
    };

    const comment = new Comment(seedComment);
    await comment.save();
  }
};

seedDB()
  .then(() => {
    console.log("\n\n\n\nSeeding Successful");
  })
  .catch((err) => {
    console.log(err);
  });
