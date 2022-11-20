import * as Icon from '@mui/icons-material'
import React from 'react'
import Recommendation from '../recommendation/Recommendation'

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <Recommendation type='user' />
        <Recommendation type='popular' />
        <Recommendation type='editor' />
        <button className='rightButton'>
          See More
          <Icon.ArrowDropDown />
        </button>
      </div>
    </div>
  )
}

export default Rightbar
