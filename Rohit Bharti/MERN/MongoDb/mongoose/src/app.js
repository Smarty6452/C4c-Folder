const mongoose = require("mongoose");

//promises
// connection creation
mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successfull...."))
  .catch((err) => console.log(err));

//structure
const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});
const Playlist = new mongoose.model("Playlist", playListSchema);
// const Playlist = new mongoose.model("Playlist", playListSchema)

// create a documenmt to insert
const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "NodeJsJS",
      ctype: "Back End",
      videos: 20,
      author: "Smarty",
      active: true,
    });
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
