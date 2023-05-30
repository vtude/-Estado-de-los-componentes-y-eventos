import { useState } from "react";
import "./App.css";
import Alert from "./components/AlertReact/AlertReact";
import Login from "./components/Login/Login";

function App() {
  const [isValid, setIsValid] = useState();
  const handlersSubmitResult = (e) => {
    setIsValid(e);
  };

  return (

    <div className="App">
      <h1>Desafio-Estado de los componentes y eventos</h1>
      <Login onSubmitForm={(e) => handlersSubmitResult(e)} />


      < Alert
          text={isValid ? "Los datos son correctos" : "Los datos son incorrectos!"}
          variant={isValid ? "success" : "danger"}
        />

  
    </div>
  );
}

export default App;
