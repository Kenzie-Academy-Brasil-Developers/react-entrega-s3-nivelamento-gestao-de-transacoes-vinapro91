import { useState } from "react";

const Input = ({ transactions, setTransactions }) => {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const handleClick = () => {
    const newEntry = { name, quantity, price };
    console.log(newEntry);
    setTransactions([...transactions, newEntry]);
  };
  return (
    <div>
      <label> Nome: </label>
      <input
        value={name}
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label> Quantidade: </label>
      <input
        type="number"
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <label> Preço: </label>
      <input
        type="number"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default Input;
