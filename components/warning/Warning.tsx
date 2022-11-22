import React from 'react'
import { useSelector } from 'react-redux'

function Warning() {
  const name = useSelector((state: any) => state.user.name)
  return (
    <div className='warning'>
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.
    </div>
  )
}

export default Warning
