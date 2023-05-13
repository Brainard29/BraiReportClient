import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilAccountLogout,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import users from '../../assets/user.png'
import { useNavigate } from "react-router-dom";

const AppHeaderDropdown = (props) => {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/');
    props.onLogout();
    return (
      <div>
        <p>You have been logged out.</p>
      </div>
    );
  };  

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={users} size="sm" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="profile" />
          <strong>  Profile</strong> 
        </CDropdownItem>
        <CDropdownItem onClick={Logout}>
          <CIcon icon={cilAccountLogout} className="logout" />
          <strong>  Logout</strong> 
        </CDropdownItem>
        <CDropdownDivider />
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
