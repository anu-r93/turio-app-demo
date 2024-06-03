import dbConnect from "./../../../db/connect";
import Place from "./../../../db/models/places";

export default async function handler(request, response) {
  await dbConnect();
  const places = await Place.find();
  return response.status(200).json(places);
}
