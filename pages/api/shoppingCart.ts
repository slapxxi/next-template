import { NextApiHandler } from 'next';
import { connectToDatabase } from '../../lib/connectToDatabase';

let cartHandler: NextApiHandler = async (req, res) => {
  let { db } = await connectToDatabase();

  if (req.method === 'POST') {
    let body = JSON.parse(req.body);
    await db.collection('shoppingCart').insertMany(body.items.map((i) => ({ ...i, itemId: i.id })));
    res.json({ status: 'success' });
  } else {
    let items = await db
      .collection('shoppingCart')
      .aggregate([
        {
          $lookup: {
            from: 'items',
            localField: 'itemId',
            foreignField: 'id',
            as: 'item',
          },
        },
      ])
      .map((doc) => ({ ...doc, item: doc.item[0] }))
      .toArray();
    res.json({ items });
  }
};

export default cartHandler;
