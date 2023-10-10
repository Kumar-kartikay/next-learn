import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'

// export default function AuthProfileMenu() {
//   const { data, status } = useSession()
//   const isAuth = status === 'authenticated'

//   if (isAuth) {
//     return (
//       <div className="flex space-x-2">
//         <p>Welcome, {data?.user?.name}</p>
//         <Link href="/">Home</Link>
//         <Link href="/posts">Posts</Link>
//         <Link href="/profile">Profile</Link>
//         <Link href="/settings">Settings</Link>
//         <button className="h-6 w-full bg-red-400 mt-2" onClick={() => signOut()}>
//           Logout
//         </button>
//       </div>
//     )
//   }

//   return (
//     <ul>
//       <li>
//         <Link href="/auth/sign-in">Login</Link>
//       </li>
//     </ul>
//   )
// }

// export default function AuthProfileMenu() {
//   const { data, status } = useSession()
//   const isAuth = status === 'authenticated'

//   return (
//     <div className="flex flex-row space-x-2">
//       {isAuth ? (
//         <>
//           <p>Welcome, {data?.user?.name}</p>
//           <Link href="/home">Home</Link>
//           <Link href="/posts">Posts</Link>
//           <Link href="/profile">Profile</Link>
//           <Link href="/settings">Settings</Link>
//           <button className="h-6 w-full bg-red-400 mt-2" onClick={() => signOut()}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <>
//           <Link href="/auth/sign-in">Login</Link>
//         </>
//       )}
//     </div>
//   )
// }

export default function AuthProfileMenu() {
  const { data, status } = useSession()
  const isAuth = status === 'authenticated'

  return (
    <div className="flex flex-row space-x-2">
      {isAuth ? (
        <>
          <Link href="/home">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/settings">Settings</Link>
          <p>Welcome, {data?.user?.name}</p>
          <button className="h-6 w-full bg-red-400 mt-2" onClick={() => signOut()}>
            Logout
          </button>
        </>
      ) : (
        <Link href="/auth/sign-in">Login</Link>
      )}
    </div>
  )
}
