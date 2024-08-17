import { useState } from "react";
import { Button } from "./exercise2";

const StadisticLine = ({ text, value }) => {
    return <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>

}

function Statadistics({ calification }) {

    const getPromPositive = () => (calification.good * 100) / calification.total;


    const getAvg = () =>
        (calification.good - calification.bad) / calification.total

    if (calification.total === 0) {
        return <tr><td colSpan="2">No feedback given</td></tr>
    }

    return <>
        <StadisticLine text='all' value={calification.total} />
        <StadisticLine text='average' value={getAvg()} />
        <StadisticLine text='positive' value={getPromPositive() + ' %'} />
    </>
}

export function Exercise3() {

    const [calification, setCalification] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0
    })


    const handleGood = () => {
        setCalification({
            ...calification,
            good: calification.good + 1,
            total: calification.total + 1
        })
    }

    const handleNeutral = () => {
        setCalification({
            ...calification,
            neutral: calification.neutral + 1,
            total: calification.total + 1
        })
    }

    const handleBad = () => {
        setCalification({
            ...calification,
            bad: calification.bad + 1,
            total: calification.total + 1
        })
    }


    return <div>
        <section>
            <Button text='good' execute={handleGood} />
            <Button text='neutral' execute={handleNeutral} />
            <Button text='bad' execute={handleBad} />
        </section>
        <section>
            <h2>Statistics</h2>
            <table border={'1px'} style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>good</td>
                        <td>{calification.good}</td>
                    </tr>
                    <tr>
                        <td>neutral</td>
                        <td> {calification.neutral}</td>
                    </tr>
                    <tr>
                        <td>Bad</td>
                        <td>{calification.bad}</td>
                    </tr> 
                    <Statadistics calification={calification} /> 
                </tbody>
            </table>
        </section>
    </div>
}