'use client'

import { useSession } from 'next-auth/react'
import { sessionStatus } from '../../utils/session'

import { redirect } from 'next/navigation'
import React, { useLayoutEffect } from 'react'

const Page = () => {
  const { data, status, update } = useSession()
  console.log(data, status)
  // useLayoutEffect(() => {
  //   const session = sessionStatus
  //   if (!session) {
  //     console.log('hello')
  //     redirect('/')
  //   } else {
  //     console.log('wow')
  //   }
  // }, [])
  // useLayoutEffect(() => {
  //   if (status === 'unauthenticated') {
  //     redirect('/')
  //   }
  // }, [status])

  // console.log(data, 'd')
  // console.log(status, 's')
  // console.log(update, 'u')
  // return <div>{JSON.stringify(data)}</div>

  return <div>profile</div>
}

export default Page
