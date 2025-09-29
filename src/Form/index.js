import React, { useState, useEffect } from "react";
import Result from "./Result";
import { useRatesData } from "./useRatesData";
import {
    FormWrapper,
    Fieldset,
    Legend,
    LabelText,
    InputField,
    SelectField,
    Button,
    Loading,
    Failure,
    Info
} from "./styled";

function Form() {
    const ratesData = useRatesData();
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (ratesData.state === "success") {
            const firstCurrency = Object.keys(ratesData.rates)[0] || "";
            setCurrency(firstCurrency);
        }
    }, [ratesData]);

    const onSubmit = (event) => {
        event.preventDefault();

        if (amount <= 0) {
            setResult("Kwota musi być większa od zera!");
            return;
        }

        if (!ratesData.rates[currency]) {
            setResult("Wybierz walutę");
            return;
        }

        const finalResult = amount / ratesData.rates[currency].value;

        setResult({
            amount: +amount,
            currency,
            finalResult,
        });
    };

    if (ratesData.state === "loading") {
        return (
            <Loading>
                Sekundka... <br /> Ładuję kursy walut z currencyapi.com
            </Loading>
        );
    }

    if (ratesData.state === "error") {
        return (
            <Failure>
                Hmm... Coś poszło nie tak. Sprawdź, czy masz połączenie z internetem
            </Failure>
        );
    }

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
                            {Object.keys(ratesData.rates || {}).map((code) => (
                                <option key={code} value={code}>
                                    {code}
                                </option>
                            ))}
                        </SelectField>
                    </label>
                </p>

                <Button>Przelicz</Button>

                <Result result={result} />

                {ratesData.date && (
                    <Info>
                        Kursy pobrano z <a href="https://currencyapi.com">currencyapi.com</a>
                        <br />
                        Data: {new Date(ratesData.date).toLocaleDateString("pl-PL", { day: "2-digit", month: "long", year: "numeric" })}
                    </Info>
                )}
            </Fieldset>
        </FormWrapper>
    );
}

export default Form;