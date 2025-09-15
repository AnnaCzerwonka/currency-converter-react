import { Wrapper } from "./styled";

function Result({ result }) {
    return (
        <Wrapper>
            {result === null ? (
                "Wynik: N/A"
            ) : typeof result === "string" ? (
                result
            ) : (
                <>
                    Wynik: {result.amount.toFixed(2)} zł ={" "}
                    <strong>
                        {result.finalResult.toFixed(2)} {result.currency}
                    </strong>
                </>
            )}
        </Wrapper>
    );
}

export default Result;