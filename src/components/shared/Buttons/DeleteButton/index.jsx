import React from "react"

import { DelButton } from "./styles"

const DeleteButton = (props) => {
    const deleteToDo = () => {
        const deleteConfirm = confirm('Do you really want to delete to do?')

        if(!deleteConfirm)
            return
        
        fetch(`https://json-database-kzd0.onrender.com/toDo/${props.toDoId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then(() => {
            props.deleteCallback()
        })
    }

    return (
        <DelButton type="button" onClick={deleteToDo}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
        </DelButton>
    )
}

export { DeleteButton }