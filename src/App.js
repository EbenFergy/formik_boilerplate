import "./App.css";
import { useState } from "react";
import FormikContainer from "./Components/FormikContainer";

function App() {
  const [dateInput, setDateInput] = useState();
  const onChange = (e) => {
    setDateInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    switch (dateInput) {
      case dateInput >= "2023 - 02 - 01":
        return "valid date";
      case dateInput <= "2023 - 02 - 01":
        return "invalid date";
      default:
        return null;
    }
  };
  return (
    <div className="App">
      <FormikContainer />

      <form onSubmit={onSubmit}>
        <input type="date" onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
