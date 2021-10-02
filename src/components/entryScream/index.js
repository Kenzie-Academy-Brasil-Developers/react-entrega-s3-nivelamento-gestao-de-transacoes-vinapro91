const EntryScream = ({ transactions, setTransactions }) => {
  return (
    <div>
      <h2>Entrada :</h2>
      {transactions
        .filter((item) => item.quantity > 0)
        .map((item, index) => (
          <div key={index}>
            <p>
              Nome: {item.name}, Quantidade :{item.quantity}, valor:{" "}
              {item.price}
            </p>
          </div>
        ))}
      <h3>
        Valor total de Entradas:
        {transactions
          .filter((item) => item.quantity > 0)
          .reduce((acc, item) => {
            return acc + item.price;
          }, 0)}
      </h3>
    </div>
  );
};

export default EntryScream;
