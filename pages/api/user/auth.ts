import { NextApiHandler } from 'next';
import { User } from 'next-auth';
import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../lib/connectToDatabase';

let userHandler: NextApiHandler = async (req, res) => {
  let session = await getSession({ req });

  if (!session) {
    return res.json({ error: 'auth error', message: 'must be authenticated' });
  }

  let { db } = await connectToDatabase();
  let user = await db.collection('users').findOne(
    { email: session.user.email },
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
        sex: 1,
        about: 1,
        age: 1,
        isOnline: 1,
        bid: 1,
        eyeColor: 1,
        hairColor: 1,
        createdAt: 1,
      },
    },
  );
  res.json(user as User);
};

export default userHandler;
