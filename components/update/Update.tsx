import React, { useState } from 'react'
import Warning from '../warning/Warning'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../../redux/userSlice'

function Update() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const user = useSelector((state: any) => state.user)
  const dispatch = useDispatch()

  const handleUpdate = (e: any) => {
    e.preventDefault()
    dispatch(
      update({
        name,
        email,
      }),
    )
  }

  return (
    <div className='update'>
      <div className='updateWrapper'>
        <h3 className='updateTitle'>Update Your Account</h3>
        <Warning />
        <button className='delete'>Delete Account</button>
        <div className='updateContainer'>
          <form>
            <div className='formItem'>
              <label>Profile Picture</label>
              <div className='profilePic'>
                <img
                  className='avatar'
                  src='https://images.unsplash.com/profile-fb-1547572180-93a860f0a32b.jpg?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff'
                  alt='avatar_profile'
                />
                <span className='change'>Change</span>
              </div>
            </div>
            <div className='formItem'>
              <label>Username</label>
              <input
                className='formInput'
                type='text'
                placeholder={user.name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='formItem'>
              <label>Email</label>
              <input
                className='formInput'
                type='text'
                placeholder={user.email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='formItem'>
              <label>Password</label>
              <input className='formInput' type='password' />
            </div>
            <button className='updateButton' onClick={handleUpdate}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update
