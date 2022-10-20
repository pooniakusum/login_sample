import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AddUsers from "./components/AddUsers";
import { Container, Row, Col } from "reactstrap";
import Menu from "./components/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import useToken from "./components/Login/useToken";
import AllUsers from "./components/AllUsers";
import Settings from "./components/Settings";
import PasswdUpdate from "./components/PasswdUpdate";
import Register from "./components/Login/Register";
import logging from "./assets/logging.jpg";
import Contact from "./components/Contact";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return (
      <div>
        <Router>
          <ToastContainer />
          <Container>
            <Header />
            <Row>
              <Col md={7}>
                <img src={logging} alt="log" />
              </Col>
              <Col md={5}>
                <Routes>
                  <Route
                    path="/"
                    element={<Login setToken={setToken} />}
                    exact
                  />
                  <Route path="/register" element={<Register />} exact />
                </Routes>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }

  return (
    <div>
      <ToastContainer />
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route
                  path="/add-user"
                  element={<AddUsers token={token} />}
                  exact
                />
                <Route
                  path="/view-users"
                  element={<AllUsers token={token} />}
                  exact
                />
                <Route
                  path="/settings"
                  element={<Settings token={token} />}
                  exact
                />
                <Route
                  path="/contact"
                  element={<Contact token={token} />}
                  exact
                />
                <Route
                  path="/changePassword"
                  element={<PasswdUpdate token={token} />}
                  exact
                />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
