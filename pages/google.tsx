import { UserInfo } from 'firebase/auth'
import React from 'react'

interface GoogleProps {
  user: UserInfo
  signIn: () => void
  signOut: () => void
}

const google = ({ user, signIn, signOut }: GoogleProps) => {
  return (
    <div>
      {user ? (
        <>
          <span>Signed in as : {user.email}</span>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </div>
  )
}

export default google
