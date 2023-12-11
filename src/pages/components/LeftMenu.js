import React, { useState } from 'react'
import { Menu } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

// submenu keys of first level
const rootSubmenuKeys = ['dashboard', 'epic']
const items = [
  getItem('Dashboard', 'dashboard'),
  getItem('Epic', 'epic'),
]

const LeftMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const parts = location.pathname.split('/')
  const defaultSelectedKeys = items.map(item => (
    item.key === parts[parts.length - 1] ? item.key : null
  ))

  const [openKeys, setOpenKeys] = useState(['dashboard'])
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const handleClick = (item) => {
    parts[parts.length - 1] = item.key
    navigate(parts.join('/'))
  }
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        minWidth: '200px',
        height: '100%',
        fontSize: '16px',
        color: 'black',
      }}
      items={items}
      defaultSelectedKeys={defaultSelectedKeys}
      onClick={handleClick}
    />
  )
}
export default LeftMenu