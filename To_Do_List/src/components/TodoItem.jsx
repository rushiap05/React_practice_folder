import { IoIosClose } from "react-icons/io";

export const TodoItem = (props) => {

    
    return (
        <>
            <div className="todo_div">
                <button id={props.id} onClick={()=>{
                    props.deleteIt(props.id)
                }} className="todo_buttom"><IoIosClose /></button>
                <h4 className="list_item">{props.liData}</h4>
            </div>
        </>
    )
}