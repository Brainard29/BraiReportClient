import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a>
          Berau Coal
        </a>
        <span className="ms-1">2022 Intern</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Made by</span>
        <a>
          Brainard
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
