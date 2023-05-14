import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import image from './loginImage.jpg';
//import { LoginUser, reset } from "src/views/pages/features/authSlice.js";
import {
  CAlert,
  CButton,
  CForm,
  CFormInput,
  CImage,
  CFormText
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from "axios";
import './styles.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
	const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
		e.preventDefault();
		try {
        await axios.post('http://localhost:5000/login', {
        username: username,
        password: password,
      });
      navigate("/dashboard");
	  } catch (error) {
       if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);        
      }
		}
	};

  return (
    <div className="RootWrapperLoginPage">
      <CForm onSubmit={login} autoComplete='off'>
      {error && <CAlert color="danger" dismissible>{error}</CAlert>}
      <div className="LoginPage">
        <CImage className="column1" src={image} alt="login page image" />
        <div className="content">
          <div className="content-frame">
            <div className="content_1">
              <div className="Frame5">
                <div className="Frame4">
                  <div className="UsernameInput">
                    <div className="Username">
                      <div className="Frame2">
                        <CFormText className="TitleUsername"> 
                          <CIcon icon={cilUser} /> Username
                        </CFormText>
                        <CFormInput
                          className="FillUsername"
                          name="username" 
                          placeholder="Type your username" 
                          onChange={(e) => setUsername(e.target.value)}
                          value={username} 
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="PasswordInput">
                    <div className="Password">
                      <div className="Frame2">
                        <CFormText className="TitlePassword"> 
                          <CIcon icon={cilLockLocked} /> Password
                        </CFormText>
                        <CFormInput
                          className="FillPassword"
                          type="password"
                          placeholder="Type your password"
                          name="password" 
                          onChange={(e) => setPassword(e.target.value)}
                          value={password} 
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SubmitButton">
                  <CButton className="Frame3" type="submit" color="primary" disabled={!username || !password}>
                    Login
                  </CButton>
                </div>
              </div>
              <div className="TitleLogin">
                Login
              </div>
              <div className="Title">
                Welcome !
                <br/>
                Please fill in some details below to enter.
              </div>
            </div>
          </div>
        </div>
      </div>
      </CForm>
    </div>
  )
}
export default Login

/*
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={Auth}>
                    {isError && <CAlert color="danger" dismissible>{message}</CAlert>}
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                      name="username" 
                      placeholder="Username" 
                      onChange={(e) => setUsername(e.target.value)}
                      value={username} 
                      required 
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        name="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} 
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="success" disabled={!username || !password}>
                          {isLoading ? "Loading..." : "LOGIN"}
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
export default Login
*/
