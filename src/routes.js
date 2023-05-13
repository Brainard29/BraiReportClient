import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Report = React.lazy(() => import('./views/fitur/report/Report'))
const ListReport = React.lazy(() => import('./views/fitur/list-report/ListReport'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/fitur/report', name: 'Report', element: Report },
  { path: '/fitur/list-report', name: 'List Report', element: ListReport },
]

export default routes
