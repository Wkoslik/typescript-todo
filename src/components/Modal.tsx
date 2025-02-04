import { useState } from 'react'
import { ToDo } from '../App'

interface ModalProps{
    addNewToDo: (newTodo: ToDo) => void
    className: string,
    toggleModal: () => void
}

export default function Modal(props: ModalProps) {
    const [name, setName] = useState('')
    const [dueDate, setDueDate] = useState(0)
    const [complete, setComplete] =useState(false)

    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        let newToDo = { name, dueDate, complete }
        if(name && dueDate){
            props.addNewToDo(newToDo)
        }
        props.toggleModal()
    }

    return(
        <div className={props.className}>
            <form className="modal__form" onSubmit={e => handleSubmit(e)}>
                <p className="heading heading--two"> Add to list</p>
                <span className = "modal__form modal__form__field">
                    <p className="content content--two">Item name:</p>
                    <input 
                    className = "content content--two"
                    type="text"
                    onChange={e => setName(e.target.value)}
                    />
                </span>
                <span className="modal__form modal__form__field">
                    <p className = "content content--two">Due date:</p>
                    <input 
                    className = "content content--two"
                    type="date"
                    onChange={e => setDueDate(Date.parse(e.target.value))}
                    />
                </span>
                <span className="modal__form modal__form__field modal__form__field--submit">
                    <input 
                    className = "content content--two modal__form__button"
                    type="submit"
                    value="Add"
                    />
                </span>
            </form>
        </div>
    )
}