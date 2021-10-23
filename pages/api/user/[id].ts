import { NextApiHandler } from 'next';
import { connectToDatabase } from '../../../lib/connectToDatabase';

let userHandler: NextApiHandler = async (req, res) => {
  let { query } = req;
  let { db } = await connectToDatabase();
  let user = await db
    .collection('users')
    .findOne(
      { _id: query.id },
      { projection: { _id: 0, id: '$_id', image: 1, name: 1, height: 1, gender: 1 } },
    );
  res.json(user);
};

export default userHandler;
