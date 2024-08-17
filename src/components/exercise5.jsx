import { useEffect, useState } from "react"
import numberService from "./services/numberService"

function PersonForm({ addPhone }) {

    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')


    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handlenameChange = (e) => {
        setName(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        addPhone(name, phone)
        setPhone('')
        setName('')
    }

    return <form onSubmit={submit}>
        <label htmlFor="name">name: </label>
        <input id="name" type="text" onChange={handlenameChange} value={name} /><br />
        <label htmlFor="number">number: </label>
        <input id="number" type="text" onChange={handlePhoneChange} value={phone} /><br />
        <input type="submit" value="add" />
    </form>
}


function Persons({ listPhones }) {
    return <div>
        {
            listPhones.map((phone) => {
                return <p key={phone.id}>{phone.name} {phone.number}</p>
            })
        }
    </div>
}

function FilterPerson({ persons }) {

    const [filter, setFilter] = useState('')

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const personFilter = () => {
        return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    }

    return <section>
        <input type="text" value={filter} onChange={handleFilterChange} />
        {filter.trim() !== '' && <Persons listPhones={personFilter()} />}
    </section>

}
export function Exercise5() {
    const [listPhones, setListPhones] = useState([])

    useEffect(() => {
        numberService.getNumbers()
            .then(response => { setListPhones(response) })
            .catch(error => { console.log(error) })
    }, [])

    const addPhone = (namePhone, newPhone) => {

        const exitName = listPhones.findIndex(phone => phone.name === namePhone)
        console.log(exitName)

        if (exitName >= 0) {
            window.alert(`${newPhone} is already added to phonebook`)
            return
        }
        const infoPhone = {
            name: namePhone,
            number: newPhone,
            id: listPhones.length + 1
        }
        setListPhones([...listPhones, infoPhone])
    }

    return <section>
        <h2>Phonebook</h2>
        <FilterPerson persons={listPhones} />
        <h3>Add a new</h3>
        <PersonForm addPhone={addPhone} />
        <h1>Numbers</h1>
        <Persons listPhones={listPhones} />
    </section>
}