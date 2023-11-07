import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { users } from "../../../../helpers/constants";

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 15 * 60, // 30 minute
  },
  providers: [
    CredentialProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { nim, password } = credentials;
        try {
          const res = await fetch(process.env.NEXT_PUBLIC_NEXT_API + "login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nim: nim, password: password }),
          });
          const data = await res.json();
          const user = data.data;
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.id = user?._id;
        token.nim = user?.nim;
        token.nama = user?.nama;
        token.status = user?.status;
        token.eligible = user?.eligible;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.nim = token.nim;
        session.user.nama = token.nama;
        session.user.status = token.status;
        session.user.eligible = token.eligible;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
