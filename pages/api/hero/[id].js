import dbConnect from "../../../db/dbconnect";
import Hero, { db } from "../../../models/Hero";

dbConnect();

//get a unique record, delete, edit

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const hero = await Hero.findById(id);
        if (!hero) {
          res.status(400).json({ sucess: false });
        }
        res.status(200).json({ sucess: true, hero: hero });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    case "PUT":
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!hero) {
          res.status(400).json({ sucess: false });
        }
        res.status(200).json({ sucess: true, hero: hero });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    case "DELETE":
      try {
        const hero = await Hero.deleteOne({ _id: id });
        if (!hero) {
          res.status(400).json({ sucess: false });
        }
        res.status(200).json({ sucess: true, hero: hero });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;

    default:
      res.status(400).json({ sucess: false });
      break;
  }
};
