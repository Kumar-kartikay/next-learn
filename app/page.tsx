import { Session, getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
export default async function Page() {
  const session: Session | null = await getServerSession(authOptions)

  // if (session?.user) {
  //   redirect('/home')
  // } else {
  //   redirect('/auth/sign-in')
  // }

  return (
    <div>
      <p>This is main page</p>
      {/* <div>{JSON.stringify(data)}</div>  */}
    </div>
  )
}

// export default async function PrivateLayout({ children }: Props) {
//   const session = await getServerSession(authOptions)
//   if (!session?.user) redirect('/auth/sign-in')
//   return <>{children}</>
// }
