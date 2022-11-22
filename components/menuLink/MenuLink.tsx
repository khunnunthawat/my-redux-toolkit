import React from 'react'
import { useSelector } from 'react-redux'

interface MenuLinkProps {
  icon: JSX.Element
  text: string
}

function MenuLink({ icon, text }: MenuLinkProps) {
  const name = useSelector((state: any) => state.user.name)

  return (
    <div className='menuLink'>
      {icon}
      <span className='menuLinkText'>{text}</span>
      <span className='menuLinkTextName'>
        {text === 'Logout' && `( ${name} )`}
      </span>
    </div>
  )
}

export default MenuLink
