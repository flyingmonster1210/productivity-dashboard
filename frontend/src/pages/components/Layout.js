import React from 'react'
import Header from './header/Header'
import LeftMenu from './LeftMenu'
import { Outlet, useLocation } from 'react-router-dom'

function Layout () {
  const location = useLocation()
  const isProjectPage = location.pathname === '/project' || location.pathname === '/project/'

  return (
    <div className="layout_wrap">
      <div className="header_wrap">
        <Header />
      </div>
      <div className="layout_wrap_project">
        {
          !isProjectPage &&
          <div className="project_side_menu_wrap">
            <LeftMenu />
          </div>
        }
        <div className="project_wrap">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
