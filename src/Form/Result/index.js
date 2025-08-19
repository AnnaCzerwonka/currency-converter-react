import "./style.css";

function Result({ result }) {
    return (
        <p className="result">
            {result === null ? (
                "Wynik: N/A"
            ) : typeof result === "string" ? (
                result
            ) : (
                <>
                    Wynik: {result.amount.toFixed(2)} zł ={" "}
                    <strong>{result.finalResult.toFixed(2)} {result.currency}</strong>
                </>
            )}
        </p>
    );
}

export default Result;