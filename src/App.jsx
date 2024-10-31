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
      <div className="container">
        <h1 className="text-4xl">{count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
    </>
  );
}

export default App;
