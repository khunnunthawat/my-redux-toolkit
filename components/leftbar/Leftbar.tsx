import React from 'react'
import MenuLink from '../menuLink/MenuLink'
import { MenuItems, MenuItemProps } from './menu-items'

function Leftbar() {
  return (
    <div className='leftbar'>
      <div className='leftbarWrapper'>
        {MenuItems.map((item: MenuItemProps, index: number) => (
          <MenuLink key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Leftbar
