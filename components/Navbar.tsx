'use client'

import Link from 'next/link'
import AuthProfileMenu from './AuthProfileMenu'
import { useSession } from 'next-auth/react'

function Navbar() {
  return (
    <div className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Left - Home link */}
          <Link href="/" className="text-white hover:text-blue-300">
            Home
          </Link>

          <AuthProfileMenu />
        </div>
      </div>
    </div>
  )
}

// export default Navbar

// function Navbar() {
//   const { status } = useSession()
//   const isAuth = status === 'authenticated'

//   return (
//     <div className="bg-blue-600 p-4 text-white">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           {!isAuth && (
//             <Link href="/" className="text-white hover:text-blue-300">
//               Home
//             </Link>
//           )}
//           <AuthProfileMenu />
//         </div>
//       </div>
//     </div>
//   )
// }

export default Navbar
