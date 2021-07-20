import "./App.css";
import Card from "react-bootstrap/Card";
import Gorm from "./Gorm";
import Namelist from "./namelist";
import { Tour } from "./Tour";
import Classlern from "./classlern";
import Submitreg from "./Submitreg";

function App() {
  return (
    <>
      <Classlern />
      <Submitreg />
      <Tour />
      <Gorm />
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
