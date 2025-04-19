import "./App.css";
import ControlledField from "./components/controlled-field/ControlledField";
import FormAction from "./components/form-action/FormAction";
import SimpleForm from "./components/simple-form/SimpleForm";

function App() {
  return (
    <>
      <h1>Explore React form</h1>
      <SimpleForm></SimpleForm>
      <FormAction></FormAction>
      <ControlledField></ControlledField>
    </>
  );
}

export default App;
