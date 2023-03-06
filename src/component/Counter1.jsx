import { useState } from "react";

function Counter1() {
    const [count, setCount] = useState(1);

    const increase = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Count {count}</h1>
            <button style={{padding: 10}} onClick={increase}>Add 1</button>
        </>
    )
}

export default Counter1;