'use client'
import { useSession, signOut } from 'next-auth/react'

function Navbar() {
  const { data: session } = useSession()

  return (
    <div>
      {session ? (
        <>
          <button
            onClick={() => {
              signOut()
            }}
          >
            Sign out
          </button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  )
}

export default Navbar
