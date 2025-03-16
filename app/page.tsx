"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
 

  return (
    <div>
      
      {session ? (
        <>
          <p>Welcome {session.user?.name}!</p>
          <p>Is {session.user?.email} your email?</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      )}
    </div>
  );
}
