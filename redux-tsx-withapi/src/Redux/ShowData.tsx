//import { useGetAllProducts } from "./productsApiSlice";

import { useDispatch } from "react-redux";
import { priceAdd } from "./DataDistplaySlice";

function ShowData() {
  //const data = useGetAllProducts();
  //console.log(data);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Show Data</h1>
      <button onClick={() => dispatch(priceAdd())}>Add</button>
    </div>
  );
}

export default ShowData;
