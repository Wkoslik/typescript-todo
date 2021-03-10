import { ToDo } from '../App'
import moment from 'moment'

interface ListItemProps {
    index: number,
    toDo: ToDo,
    updateToDos: (toDoIndex: number) => void
}

export default function ListItem(props: ListItemProps){

    let displayDate = moment(props.toDo.dueDate).format('YYYY-MM-DD')

    return(
        <span className="list__item">
            <input 
            className="heading heading--one"
            type="checkbox"
            onClick={() => props.updateToDos(props.index)}
            />
            <p className="content content--one list__text">
                {displayDate}
            </p>
            <p className="content content--one list__text">{props.toDo.name}</p>
        </span>
    )
}