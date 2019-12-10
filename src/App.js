import * as React from "react";
import { render } from "react-dom";
import Dragula from "react-dragula";
import "./App.css";
import "react-dragula/dist/dragula.css";
import { SomeOther } from "./SomeOther";
import { Calendar } from "./Calendar";


let options = {
  copy: true
};
const drake = Dragula([], options);
export const DrakeContext = React.createContext(drake); 
export default function App() {



  return (
    <div>
      
      <SomeOther /> 

      <Calendar /> 
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
