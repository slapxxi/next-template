import { NextApiHandler } from 'next';
import { prisma } from '../../lib/prisma';

let cartHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    let body = JSON.parse(req.body);
    for (const item of body.items) {
      await prisma.shoppingCartItem.create({
        data: { count: 1, item: { connect: { id: item.id } } },
      });
    }
    res.json({ status: 'success' });
  } else {
    let cart = await prisma.shoppingCartItem.findMany({ include: { item: true } });
    res.json({ items: cart });
  }
};

export default cartHandler;
