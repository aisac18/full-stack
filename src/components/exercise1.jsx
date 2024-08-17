function Header({ title }) {
    return <>
        <h1>{title.name}</h1>
    </>
}

function Content({ courses }) {
    return (
        <div>
            {courses['parts'].map((course, index) => {
                return (
                    <p key={index}>
                        {course.name} {course.exercises}
                    </p>
                )
            })}
        </div>
    )
}

function Total({ courses }) {

    const total = courses['parts'].reduce((sum, current) => {
        return sum + current.exercises
    }, 0)

    return <>
        <p>Number of exercises {total}</p>
    </>
}


export function Excise1() {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header title={course} />
            <Content courses={course} />
            <Total courses={course} />
        </div>
    )
}