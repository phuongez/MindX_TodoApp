import tasks from "../data/tasks";
import users from "../data/users";
import Card from "./Card";

const CardContainer = (props) => {
    const todoTask = tasks.filter(task => task.statusId===props.statusId)
    function findUser(id) {
        return users.find(user => user.userId===id).name
    }
    return ( 
        <div className="todo">
           <header>
                <div className="taskStatus">
                    <p>{props.taskName}</p>
                    <div className="taskNumber">{todoTask.length}</div>
                </div>
               <div className="todoBtn">
                    <button className="addBtn">+</button>
                    <button className="moreBtn">...</button>
               </div>
           </header>
           {todoTask.map((task,index) => {
                return (
                    <Card
                        key={index} 
                        title={task.title} 
                        description={task.description}
                        creator={findUser(task.assignedTo)}
                        fileNumbers={3}
                        deadline="Apr 12"
                    />
                )
           })}
        </div>
     );
}
 
export default CardContainer;