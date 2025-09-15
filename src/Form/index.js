import React, { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import {
    FormWrapper,
    Fieldset,
    Legend,
    LabelText,
    InputField,
    SelectField,
    Button
} from "./styled";

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
        <FormWrapper onSubmit={onSubmit}>
            <Fieldset>
                <Legend>Kalkulator walut</Legend>

                <p>
                    <label>
                        <LabelText>Kwota w zł:</LabelText>
                        <InputField
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
                        <LabelText>Waluta:</LabelText>
                        <SelectField
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.short} value={currency.short}>
                                    {currency.name}
                                </option>
                            ))}
                        </SelectField>
                    </label>
                </p>

                <Button>Przelicz</Button>

                <Result result={result} />
            </Fieldset>
        </FormWrapper>
    );
}

export default Form;

