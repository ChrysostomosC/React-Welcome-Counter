import { useEffect, useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Curent count: ${count}`;
    }, [count])

    return (<>
        <h2>Counter</h2>
        <p>Current count: {count}</p>

        <button onClick={() => { setCount(count + 1) }} >Increase count</button>
        <button onClick={() => { setCount(count - 1) }} >Decrease count</button>
    </>)
}

export default Counter;