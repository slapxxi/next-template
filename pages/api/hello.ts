import type { NextApiHandler } from 'next';

let helloHandler: NextApiHandler = (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};

export default helloHandler;
