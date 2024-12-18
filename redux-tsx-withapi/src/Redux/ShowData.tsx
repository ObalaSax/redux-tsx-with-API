import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { addition, additionPro, minus, minusPro } from "./DataDistplaySlice";

function ShowData() {
  const mySelector = useSelector((state: RootStore) => state.niceSlice.nambari);
  const myDispatch = useDispatch();
  return (
    <div>
      <button onClick={() => myDispatch(addition())}>Add</button>
      <button onClick={() => myDispatch(additionPro(20))}>Add Pro</button>

      <h1>{mySelector}</h1>
      <button onClick={() => myDispatch(minus())}>Subtract</button>
      <button onClick={() => myDispatch(minusPro(10))}>Subtract Pro</button>
    </div>
  );
}

export default ShowData;
