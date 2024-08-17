import { useState } from "react"

function Display({ counter }) {
    return <h2>{counter}</h2>
}

export function Button({execute,text }) {
    return <button onClick={execute}>{text}</button>
}

export function Exercise2() {
    const [count, setCount] = useState(0)
    const addCount = () => setCount(count + 1);
    const removeCount = () => setCount(count - 1);
    const resetCount = () => setCount(0);

    return <div>
        <Display counter={count} />
        <Button text='+' execute={addCount} />
        <Button text='-' execute={removeCount} />
        <Button text='0' execute={resetCount} />
    </div>
}