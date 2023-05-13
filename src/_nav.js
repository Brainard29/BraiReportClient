import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilColumns,
  cilNewspaper,
  cilSpeedometer,
  cilAccountLogout,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Report',
    to: '/fitur/report',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'List Report',
    to: '/fitur/list-report',
    icon: <CIcon icon={cilColumns} customClassName="nav-icon" />,
  },
]

export default _nav
