import { useState } from "react";

function Counter2() {
    const [count, setCount] = useState(2);

    const increase = () => {
        setCount(count + 2);
    }

    return (
        <>
            <h1>Count {count}</h1>
            <button style={{padding: 10}} onClick={increase}>Add 2</button>
        
        </>
    )
}

export default Counter2;