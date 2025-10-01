import { useState, useEffect } from "react";

const apiKey = process.env.REACT_APP_CURRENCY_API_KEY;
const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=PLN`;

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({ state: "loading" });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const { data, meta } = await response.json();
                setRatesData({
                    state: "success",
                    rates: data,
                    date: meta.last_updated_at,
                });
            } catch {
                setRatesData({ state: "error" });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};