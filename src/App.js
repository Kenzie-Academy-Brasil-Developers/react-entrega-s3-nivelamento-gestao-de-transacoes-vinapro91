import logo from "./logo.svg";
import "./App.css";
import OutScream from "./components/OutScream";
import Input from "./components/input";
import EntryScream from "./components/entryScream";
import AllMoves from "./components/AllMoves";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);
  const [entryOn, setEntryOn] = useState(false);
  const handleStateEntry = () => {
    setEntryOn();
  };
  return (
    <div className="App">
      <header className="App-header">
        <Input transactions={transactions} setTransactions={setTransactions} />
        <button onClick={() => setEntryOn(!entryOn)}>
          {entryOn ? "Mostrar Saidas" : "Mostrar Entradas"}
        </button>
        {entryOn ? (
          <EntryScream
            transactions={transactions}
            setTransactions={setTransactions}
          />
        ) : (
          <OutScream
            transactions={transactions}
            setTransactions={setTransactions}
          />
        )}

        <AllMoves transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
