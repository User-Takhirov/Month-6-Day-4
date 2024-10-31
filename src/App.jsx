import { useDispatch, useSelector } from "react-redux";
import { Form } from "./components/form";
import { Card } from "./components/Cards";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <Form />
      <Card />
    </>
  );
}

export default App;
