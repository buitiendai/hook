import { useState, useEffect } from "react";

function Timer() {
    let [count, setCount] = useState(10);

    useEffect(() => {
        if(count >= 0) {
            count = count - 1;
        } else {
            alert(`Time's Up`);
        }
    })

    setInterval(function() {
        setCount(count);
    }, 1000)

    return (
        <>
            <h2>Count down from {count}</h2>
        </>
    )
}

export default Timer;