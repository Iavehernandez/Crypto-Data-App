import { useDispatch, useSelector } from "react-redux";
import { buyCoin, sellCoin } from "../../Redux/slices/portfolioSlice";
import { subtractFunds, addFunds } from "../../Redux/slices/walletSlice";

const TradePanel = ({ coin }) => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.wallet);

  const handleBuy = () => {
    if (balance >= coin.price) {
      dispatch(
        buyCoin({
          id: coin.id,
          name: coin.name,
          symbol: coin.symbol,
          image: coin.image,  
          price: coin.price,
        })
      );
      dispatch(subtractFunds(coin.price));
    }
  };

  const handleSell = () => {
    dispatch(
      sellCoin({
        id: coin.id,
        price: coin.price,    
      })
    );
    dispatch(addFunds(coin.price));
  };

  return (
    <div>
      <button onClick={handleBuy}>Comprar</button>
      <button onClick={handleSell}>Vender</button>
    </div>
  );
};

export default TradePanel;
