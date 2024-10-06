

import React from 'react'

export default function layout({children}) {
  return (
    <>
    <main className="flex bg-purple-200 min-h-screen">
    <div className="w-1/2 flex justify-center items-center bg-cyan-400">
      <h1>Hello this is layout</h1>
    </div>
      <div>{children}</div>
    </main>
      </>
  )
}
