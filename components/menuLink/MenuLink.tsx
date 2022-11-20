import React from 'react'

interface MenuLinkProps {
  icon: JSX.Element
  text: string
}

function MenuLink({ icon, text }: MenuLinkProps) {
  return (
    <div className='menuLink'>
      {icon}
      <span className='menuLinkText'>{text}</span>
      <span className='menuLinkTextName'>
        {text === 'Logout' && '( EIFFEL )'}
      </span>
    </div>
  )
}

export default MenuLink
