import { NextApiHandler } from 'next';

let favoritesHandler: NextApiHandler = (req, res) => {
  res.json({ items: [{ id: '1490293', name: 'dog collar' }] });
};

export default favoritesHandler;
