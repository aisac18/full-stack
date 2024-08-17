import { useState } from "react"
import { Button } from "./exercise2"

export function Exercise4() {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

    const [selected, setSelected] = useState(0)

    const generateRandom = () => {
        const va = Math.floor(Math.random() * anecdotes.length)
        setSelected(va)
    }

    const votation = () => {
        const pointsCopy = [...points];
        pointsCopy[selected]++;
        setPoints(pointsCopy);
    }

    const mayAnecdoteVotes = () => {
        return points.indexOf(Math.max(...points))
    }


    return <section>
        <h3>{anecdotes[selected]}</h3>
        <h3>has {points[selected]} votes</h3>
        <Button text='next anectode' execute={generateRandom} />
        <Button text='vote' execute={votation} />
        <h1>Anecdote  with most votes</h1>
        <p>{anecdotes[mayAnecdoteVotes()]}</p>
        <p>has {points[mayAnecdoteVotes()]}</p>
    </section>
}