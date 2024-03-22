import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";

import "./App.css";

import axios from "axios";

import { Col, Container, Row } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import User from "./components/User";
import NewUser from "./components/NewUser";

function App() {
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const createUser = () => {
    console.log(newUser);
    axios
      .post("http://localhost:4000/users/", newUser)
      .then((res) => fetchUsers())
      .catch((error) => console.log(error));
  };

  const fetchUsers = () => {
    axios
      .get("http://localhost:4000/users/")
      .then((res) => console.log(setUsers(res.data.data)))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <NavbarComponent />
      <Container>
        <Row>
          {users.length ? (
            users.map((user, index) => (
              <Col md={4} key={index}>
                <User user={user} />
              </Col>
            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "2em" }}>
              <Spinner animation="border" role="status" />
            </div>
          )}
        </Row>

        <NewUser
          newUser={newUser}
          setNewUser={setNewUser}
          createUser={createUser}
        />
      </Container>
    </div>
  );
}

export default App;
