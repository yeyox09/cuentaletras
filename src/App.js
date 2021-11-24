import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [resultado, setResultado] = useState(0);

  function conteo() {
    //alert(input);
    let contador = {};
    let listado_final = [];
    const cadena = input.split("");
    console.log(cadena);

    for (var i = 0; i < cadena.length; i++) {
      contador[cadena[i]] =
        typeof contador[cadena[i]] !== "undefined"
          ? contador[cadena[i]] + 1
          : 1; //parseInt(contador[cadena[i]], 10) + 1;
      console.log(cadena[i]);
    }
    for (const property in contador) {
      console.log(`${property}: ${contador[property]}`);
      listado_final.push(contador[property]);
    }
    listado_final.sort((a, b) => b - a);
    console.log(listado_final);
    let valor_final = 0;
    let contador_multiplicador = 0;
    listado_final.forEach((element) => {
      //console.log(valor_final);
      valor_final = valor_final + element * (26 - contador_multiplicador);
      contador_multiplicador = contador_multiplicador + 1;
    });
    console.log("resultado final: ", valor_final);
    setResultado(valor_final);
    //return cadena.length;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ingrese palabra a calcular máximo posible </p>
        <input
          type="text"
          placeholder="Ingrese texto"
          onChange={(e) => setInput(e.target.value)}
          style={{
            textTransform: "uppercase",
          }}
        />
        {/* <p>`${input}`</p> */}
        <p>
          {input} {resultado !== 0 ? " resultado es: " + resultado : ""}{" "}
        </p>
        <button onClick={conteo}>Calcaular resultado </button>
      </header>
    </div>
  );
}

export default App;
