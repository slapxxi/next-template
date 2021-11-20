import { NextApiHandler } from 'next';
import { prisma } from '../../lib/prisma';

let cartHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    let { items } = JSON.parse(req.body);
    await prisma.shoppingCartItem.create({ data: { count: 1, itemId: items[0].id } });
    return res.json({ status: 'success' });
  }

  if (req.method === 'DELETE') {
    let { items } = JSON.parse(req.body);
    await prisma.shoppingCartItem.deleteMany({ where: { itemId: items[0].id } });
    return res.json({ status: 'success' });
  }

  let cart = await prisma.shoppingCartItem.findMany({ include: { item: true } });
  return res.json({ items: cart });
};

export default cartHandler;
