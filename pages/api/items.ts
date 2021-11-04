import { NextApiHandler } from 'next';
import { prisma } from '../../lib/prisma';

let itemsHandler: NextApiHandler = async (req, res) => {
  let items = await prisma.item.findMany();
  res.json(items);
};

export default itemsHandler;
