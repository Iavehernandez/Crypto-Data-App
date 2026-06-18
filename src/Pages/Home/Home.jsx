import react from 'react';
import {useState, useEffect} from 'react';
import { getCoins } from '../../Services/cryptoApi';
import CoinCard from '../../Components/CoinCard/CoinCard';

const Home = () => {
    const [coins, setCoins] = useState([]);

    useEffect (() => {
        const fetchCoins = async () => {
            try {
                const data = await getCoins();
                setCoins(data);
            } catch (error){
                console.error("Error fetching coins:", error);
            }
        };
        fetchCoins();
    }, []);

    return (
        <div>
            <h1>Cryptocurrency Prices</h1>
            {coins.map((coin) => (
                <CoinCard key={coin.id} coin={coin}></CoinCard>
            ))}
        </div>
    );
}

export default Home;