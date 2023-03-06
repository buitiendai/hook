import { useState } from "react";

function useIncrement() {

    const [count, setCount] = useState(0);

    function increase(addAmount) {
        setCount(count = count + addAmount);
    }

    return [count, increase]
}

export default useIncrement;