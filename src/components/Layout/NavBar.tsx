import React, { useCallback } from 'react'
import { FirebaseHelper, IUserInfo } from '../../auth/FirebaseHelper'

import s from './Navbar.module.css'
import { Button } from 'antd'

interface INavBarProps {
  user: IUserInfo
}

const NavBar: React.FC<INavBarProps> = ({ user }) => {
  const logOut = useCallback(() => {
    FirebaseHelper.signOut()
  }, [])
  return (
    <div className={s.navbar}>
      <div className={s.name}>{user.email}</div>
      <Button type="link" onClick={logOut}>
        Log out
      </Button>
    </div>
  )
}

export default React.memo(NavBar)
