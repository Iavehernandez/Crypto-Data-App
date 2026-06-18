import React from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_COINGECKO_API_KEY;
const baseUrl = "https://api.coingecko.com/api/v3";

const getCoins = async () => {
   try {
        const response = await axios.get(`${baseUrl}/coins/markets`, {
            params: {
                vs_currency: 'mxn',
                order: 'market_cap_desc',
                per_page: 10,
                page: 1,
                sparkline: false,
            },
            headers: {
                'X-CoinGecko-API-Key': API_KEY,
            },
        },)
        return response.data;
   } catch (error) {
        console.error("Error fetching coins:", error);
        throw error;
   }
};



export default getCoins;