import React, { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";
import Result from "./Result";

function Form() {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    const [result, setResult] = useState(null);

    const calculateResult = (amount, currency) => {
        const rate = currencies.find(({ short }) => short === currency).rate;
        return amount / rate;
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (amount <= 0) {
            setResult("Kwota musi być większa od zera!");
            return;
        }

        const finalResult = calculateResult(amount, currency);

        setResult({
            amount: +amount,
            currency,
            finalResult,
        });
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>

                <p>
                    <label>
                        <span className="form__labelText">Kwota w zł:</span>
                        <input
                            className="form__field"
                            placeholder="Wpisz kwotę w zł"
                            type="number"
                            step="0.01"
                            min="0.01"
                            required
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </label>
                </p>

                <p>
                    <label>
                        <span className="form__labelText">Waluta:</span>
                        <select
                            className="form__field"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.short} value={currency.short}>
                                    {currency.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </p>

                <button className="form__button">Przelicz</button>

                <Result result={result} />
            </fieldset>
        </form>
    );
}

export default Form;