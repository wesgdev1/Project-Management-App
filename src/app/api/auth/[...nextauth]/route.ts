import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "use@user.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req) {
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        console.log(user);
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
          throw new Error("Invalid email or password");
        }

        // si todo pasas  bien va a retornar ok y el user
        return {
          id: user.id + "",
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
