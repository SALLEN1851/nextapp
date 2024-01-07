import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("ONE");

       const movies = await db
           .collection("addresses")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();

       res.json(addresses);
   } catch (e) {
       console.error(e);
   }
};