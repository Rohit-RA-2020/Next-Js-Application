import dbConnect from "../../../db/dbconnect";
import Hero, { db } from "../../../models/Hero";

dbConnect();

// get all records, post a Record

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const heros = await Hero.find({});
        res.status(200).json({ sucess: true, hero: heros });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }

    case "POST":
      try {
        const hero = await Hero.create(req.body);
        res.status(200).json({ sucess: true, hero: hero });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }

    default:
      res.status(400).json({ sucess: false });
      break;
  }
};
