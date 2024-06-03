import mongoose, { Schema } from "mongoose";

const placesSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
  comments: { type: Array, required: true },
});

const Place =
  mongoose.models.Place || mongoose.model("Place", placesSchema, "places");

export default Place;
