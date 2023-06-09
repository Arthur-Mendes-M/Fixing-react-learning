import React, { useState } from "react";
import { Form } from "./styles";

const initialFields = {
    name: '',
    description: ''
}

const ToDoForm = (props) => {
    const [fields, setFields] = useState(initialFields)

    const handleFields = event => {
        setFields({
            ...fields, 
            [event.target.name]: event.target.value
        })
    }

    const createNewToDoItem = event => {
        const date = new Date()
        event.preventDefault()
        props.createNewToDoItem({
            ...fields,
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes()}`
        })

        setFields(initialFields)
    }

    return (
        <>
            <Form onSubmit={createNewToDoItem}>
                <div className="field">
                    <input type="text" name="name" id="name" placeholder="To Do title" value={fields.name} onChange={handleFields} required autoFocus />
                </div>

                <div className="field">
                    <textarea type="text" name="description" id="description" placeholder="To Do description" value={fields.description} onChange={handleFields} /> 
                </div>

                <input type="submit" value='Create' className="submitInput" />
            </Form>
        </>
    )
}

export { ToDoForm }