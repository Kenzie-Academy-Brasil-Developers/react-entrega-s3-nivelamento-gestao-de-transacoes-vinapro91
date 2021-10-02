const OutScream = ({ transactions, setTransactions }) => {
  return (
    <div>
      <h2>Saidas :</h2>
      {transactions
        .filter((item) => item.quantity < 0)
        .map((item, index) => (
          <div key={index}>
            <p>
              Nome: {item.name}, Quantidade :{item.quantity}, valor:{" "}
              {item.price}
            </p>
          </div>
        ))}
      <h3>
        Valor total de Saida:
        {transactions
          .filter((item) => item.quantity < 0)
          .reduce((acc, item) => {
            return acc + item.price;
          }, 0)}
      </h3>
    </div>
  );
};

export default OutScream;
