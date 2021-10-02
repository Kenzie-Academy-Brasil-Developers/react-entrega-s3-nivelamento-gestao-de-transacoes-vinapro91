const AllMoves = ({ transactions }) => {
  return (
    <div>
      <h2> Todas as transações</h2>
      {transactions.map((item, index) => (
        <div key={index}>
          <p>
            Nome: {item.name}, Quantidade :{item.quantity}, valor: {item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllMoves;
