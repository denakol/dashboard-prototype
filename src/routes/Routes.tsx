import React from 'react'
import { UserContext } from '../auth/UserProvider'
import { BrowserRouter as Router } from 'react-router-dom'

import { PrivateRoutes } from './privateRoutes/PrivateRoutes'
import { PublicRoutes } from './publicRoutes/PublicRoutes'

export default () => {
  return (
    <Router>
      <UserContext.Consumer>
        {({ isInit, user }) => {
          if (!isInit) {
            return <div />
          } else if (user !== null) {
            return <PrivateRoutes user={user} />
          } else {
            return <PublicRoutes />
          }
        }}
      </UserContext.Consumer>
    </Router>
  )
}
