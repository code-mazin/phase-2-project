import { useEffect, useState } from "react";

function Advice() {
    const [advice, setAdvice] = useState("");
    const [count, setCount] = useState(0);

    async function getAdvice() {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        setAdvice(data.slip.advice);
        setCount((c) => c + 1);
    }

    useEffect(function () {
        getAdvice();
    }, [])

    return (
        <div>
            <h3 style={{ marginTop: "20px"}}>{advice}</h3>
            <button style={{ marginTop: "40px"}} onClick={getAdvice}>Get advice</button>
            <Message count={count}/>
        </div>
    );
}

function Message(props) {
    return (
        <p style={{ marginTop: "20px"}}>
            You have read <strong>{props.count}</strong> pieces of advice
        </p>
    );
}

export default Advice