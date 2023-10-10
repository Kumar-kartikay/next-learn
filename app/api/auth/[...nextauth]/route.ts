import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { users } from 'app/helpers/constants'
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const user = users.find((item) => item.email === email)

        if (user?.password === password) {
          return {
            name: user.name,
            email: user.email,
            id: user.id,
          }
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.token && params.user) {
        params.token.id = params.user.id
      }
      return params.token
    },
    session({ session, token }) {
      if (session.user && token) {
        ;(session.user as { id: string }).id = token.id as string
      }

      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
