import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function NewUser({ newUser, setNewUser, createUser }) {
  return (
    <Form style={{ width: "30rem", marginTop: "4em" }}>
      <h1>Add New User</h1>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          onChange={(e) => {
            setNewUser((prev) => {
              return { ...prev, firstName: e.target.value };
            });
          }}
          type="text"
          rows={3}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          value={newUser.lastName}
          onChange={(e) => {
            setNewUser((prev) => {
              return { ...prev, lastName: e.target.value };
            });
          }}
          type="text"
          rows={3}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={newUser.email}
          onChange={(e) => {
            setNewUser((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          type="email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Avatar Url</Form.Label>
        <Form.Control
          value={newUser.avatar}
          onChange={(e) => {
            setNewUser((prev) => {
              return { ...prev, avatar: e.target.value };
            });
          }}
          type="text"
          rows={3}
        />
      </Form.Group>

      <Button onClick={() => createUser()} variant="dark" type="submit">
        Add User
      </Button>
    </Form>
  );
}

export default NewUser;
