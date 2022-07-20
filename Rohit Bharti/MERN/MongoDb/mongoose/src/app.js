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
    unique: true,
    lowercase: true,
    trim: true,
    minlength: [2, "minimum 2letters"],
    maxlength:30
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

    const mongoosePlaylist = new Playlist({
      name: "S",
      ctype: "database",
      videos: 20,
      author: "Smarty",
      active: true,
    });
   

    const result = await Playlist.insertMany([ mongoosePlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();

// const getDocument = async () => {
//   try {
//     const result = await Playlist.find({ author: "Smarty" })
//       .select({ name: 1 })
//       .sort({ name: -1 });
//     // .countDocuments();
//     // .limit(1));

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

//update Documents

// const updateDocument = async (_id) => {
//   try {
//     const result = await Playlist.updateOne(
//       { _id },
//       {
//         $set: {
//           name: "HTML",
//         },
//       }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// updateDocument("62d6a290bc9d17b8a4c95c5a");

// const deleteDocument = async (_id) => {
//   // const result = await Playlist.deleteOne({_id })
//   const result = await Playlist.findByIdAndDelete({_id })
//   console.log(result);
//   try{
//     Playlist.deleteOne();
//   }catch(err){

//   }
// }

// deleteDocument("62d6a290bc9d17b8a4c95c5a")