import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { connectToDatabase } from '../../../lib/connectToDatabase';

interface Credentials {
  email: string;
  password: string;
}

export default NextAuth({
  session: { jwt: true },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials: Credentials) {
        let { email, password } = credentials;
        let { db } = await connectToDatabase();
        let matchingUser = await db.collection('users').findOne(
          { email },
          {
            projection: { _id: 0, id: '$_id' as any, name: 1, password: 1, email: 1, image: 1 },
          },
        );
        matchingUser.role = 'admin';

        if (matchingUser) {
          let passwordsMatch = await bcrypt.compare(password, matchingUser.password);
          if (passwordsMatch) {
            return matchingUser;
          }
        }

        return null;
      },
    }),
  ],
  database: process.env.DATABASE_URL,
});
