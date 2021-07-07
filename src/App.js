import "./App.css";
import Card from "react-bootstrap/Card";

import Namelist from "./namelist";

function App() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            <Namelist />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
