import { NextApiHandler } from 'next';
import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../lib/connectToDatabase';

let chatHandler: NextApiHandler = async (req, res) => {
  let session = await getSession({ req });

  if (session) {
    let { query } = req;
    let { db } = await connectToDatabase();
    let chat = await db
      .collection('chats')
      .aggregate([
        { $match: { id: query.chatId } },
        {
          $lookup: {
            from: 'users',
            localField: 'participants',
            foreignField: '_id',
            as: 'participants',
          },
        },
      ])
      .project({ id: '$_id', messages: 1, participants: 1 })
      .toArray();
    res.json(chat[0]);
  } else {
    res.json({ error: 'not authenticated' });
  }
};

export default chatHandler;
