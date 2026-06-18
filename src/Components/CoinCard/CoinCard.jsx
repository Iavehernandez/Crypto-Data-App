import Chart from '../Chart/Chart';

const CoinCard = ({ coin }) => {
  return (
    <div>
      <img src={coin.image} alt={coin.name} width="40" />

      <h2>{coin.name}</h2>

      <p>${coin.current_price}</p>

      <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>

      <Chart coinId={coin.id} />
    </div>
  );
};

export default CoinCard;