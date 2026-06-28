import Chart from '../Chart/Chart';
import { CardContainer, CoinImage, TopSection, CoinSymbol, CoinName, CoinInfo, Percentage, Price } from '../CoinCard/styles';

const CoinCard = ({ coin }) => {
  return (

    <CardContainer> 

        <TopSection>

        <CoinInfo>

        <CoinImage>
             <img src={coin.image} alt={coin.name} width="40" />
        </CoinImage>

   
        <div>
            <CoinSymbol>{coin.symbol.toUpperCase()}</CoinSymbol>
            <CoinName>{coin.name}</CoinName>
        </div>

        </CoinInfo>

  

      <Percentage>
        {coin.price_change_percentage_24h.toFixed(2)}%
      </Percentage>

        </TopSection>

        <Price>${coin.current_price}</Price>

        

      <Chart coinId={coin.id} />

    </CardContainer>
      
    
  );
};

export default CoinCard;