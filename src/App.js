import "./App.css";
import FormikContainer from "./Components/FormikContainer";
import LoginForm from "./Components/LoginForm";
import RegistrationForm from "./Components/RegistrationForm";
import CourseEnrollment from "./Components/CourseEnrollment";

function App() {
  return (
    <div className="App">
      <FormikContainer />
      <LoginForm />
      <RegistrationForm />
      <CourseEnrollment />
    </div>
  );
}

export default App;
