import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const data = [
	{ id: 1, name: "John", age: 21, language: "english", fields: "xyz" },
	{ id: 2, name: "Cena", age: 22, language: "spanish", fields: "pqr" },
	{ id: 3, name: "Under", age: 23, language: "spanish", fields: "pqr" },
	{ id: 4, name: "Taker", age: 25, language: "english", fields: "xyz" },
	{ id: 5, name: "pawan", age: 22, language: "spanish", fields: "pqr" },
	{ id: 6, name: "Kalyan", age: 21, language: "english", fields: "xyz" },
	{ id: 7, name: "babu", age: 23, language: "spanish", fields: "xyz" },
	{ id: 8, name: "Deepthi", age: 24, language: "english", fields: "pqr" },
	{ id: 9, name: "Jaquer", age: 21, language: "english", fields: "pqr" },
	{ id: 10, name: "Jawan", age: 21, language: "spanish", fields: "xyz" },
	{ id: 11, name: "Jaapie", age: 21, language: "spanish", fields: "pqr" }
];

ReactDOM.render(<App data={data} />, document.getElementById("root"));
