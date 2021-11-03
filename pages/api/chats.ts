import { NextApiHandler } from 'next';
import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../lib/connectToDatabase';

let chatsHandler: NextApiHandler = async (req, res) => {
  let session = await getSession({ req });

  if (session) {
    let { db } = await connectToDatabase();
    let chats = await db
      .collection('chats')
      .aggregate([
        {
          $lookup: {
            from: 'users',
            localField: 'participants',
            foreignField: '_id',
            as: 'participants',
          },
        },
      ])
      .project({ _id: 0, id: '$_id', messages: 1, participants: 1 })
      .toArray();
    res.json(chats);
  } else {
    res.json({ error: 'not authenticated' });
  }
};

export default chatsHandler;
