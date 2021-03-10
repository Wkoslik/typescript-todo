import { ToDo } from '../App'

import ListItem from './ListItem'

interface ListProps {
    toDos: ToDo[]
    toggleModal: () => void
    updateToDos: (toDoIndex: number) => void
}

// export const List:FC<ListProps>=function(props: ListProps){

// }

export default function List(props: ListProps){

    let listItems = props.toDos.map((toDo, i) =>{
        return <ListItem index={i} key={i} toDo={toDo} updateToDos={props.updateToDos}/>
    })

    return(
        <div className="list">
            <div className="list__header">
                <p className="heading heading--two">ToDo List</p>
                <p className="heading heading--two list__header__add" onClick={props.toggleModal}>Add a new task</p>
            </div>
            <div className="list__body">
                { listItems }
            </div>
        </div>
    )
}