import { useEffect, useState } from "react";
import useIncrement from "../hooks/useIncrement";

function Counter1() {
    const [count, setCount] = useIncrement(1);

    useEffect(() => {
        setCount(count = count + 1)
    }, [count])

    return (
        <>
            <div>Count {count}</div>
            <button onClick={increase}>Add 1</button>
        </>
    )
}

export default Counter1;