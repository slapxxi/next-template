import { NextApiHandler } from 'next';
import { connectToDatabase } from '../../lib/connectToDatabase';

let hotHandler: NextApiHandler = async (_req, res) => {
  let { db } = await connectToDatabase();
  let users = await db
    .collection('users')
    .find(
      {},
      {
        projection: {
          _id: 0,
          id: '$_id',
          image: 1,
          name: 1,
          gender: 1,
          country: 1,
          isOnline: 1,
          photos: 1,
        },
      },
    )
    .toArray();
  let limitedUsers = users.slice(1).map((u) => ({ ...u, photos: u.photos ?? [] }));
  res.json(limitedUsers);
};

export default hotHandler;
