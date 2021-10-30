import { NextApiHandler } from 'next';
import { connectToDatabase } from '../../../lib/connectToDatabase';

let userHandler: NextApiHandler = async (req, res) => {
  let { query } = req;
  let { db } = await connectToDatabase();
  let user = await db.collection('users').findOne(
    { _id: query.id },
    {
      projection: {
        _id: 0,
        id: '$_id',
        image: 1,
        name: 1,
        height: 1,
        weight: 1,
        gender: 1,
        country: 1,
        about: 1,
        age: 1,
        isOnline: 1,
        bid: 1,
        eyeColor: 1,
        hairColor: 1,
        photos: 1,
        createdAt: 1,
      },
    },
  );
  res.json({ ...user, photos: user.photos ?? [] });
};

export default userHandler;
