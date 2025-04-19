import "./App.css";
import ControlledField from "./components/controlled-field/ControlledField";
import FormAction from "./components/form-action/FormAction";
import HookForm from "./components/hook-form/HookForm";
import ProductManagement from "./components/product-management/ProductManagement";
import SimpleForm from "./components/simple-form/SimpleForm";
import UncontrolledField from "./components/unctrolled-field/UncontrolledField";

function App() {
  return (
    <>
      <h1>Explore React form</h1>
      <SimpleForm></SimpleForm>
      <FormAction></FormAction>
      <ControlledField></ControlledField>
      <UncontrolledField></UncontrolledField>
      <HookForm></HookForm>
      <ProductManagement></ProductManagement>
    </>
  );
}

export default App;
