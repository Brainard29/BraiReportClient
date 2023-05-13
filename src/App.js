import React, { Component, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Report = React.lazy(() => import("./views/fitur/report/Report"));
const Login = React.lazy(() => import("./views/pages/login/Login"));


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true" || false);

  function handleLogin() {
    localStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("isLoggedIn", "true"); 
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  window.addEventListener("beforeunload", () => {
    localStorage.removeItem("isLoggedIn");
  });

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      setIsLoggedIn(false);
    }
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(isLoggedIn);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/report" name="Report Page" element={<Report />} />
              <Route path="*" name="Home" element={<DefaultLayout onLogout={handleLogout} />} />
            </>
          ) : (
            <Route
              path="*"
              element={<Login onLogin={handleLogin} />}
            />
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Suspense fallback={loading}>
//           <Routes>
//             <Route path="/report" name="Report Page" element={<Report />} />
//             <Route path="/login" name="Login Page" element={<Login />} />
//             <Route path="/fitur/list-report" name="List Report Page" element={<ListReport />} />
//             <Route path="/update-report/:id" element={<UpdateReport/>}/>
//             <Route path="*" name="Home" element={<DefaultLayout />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     )
//   }
// }