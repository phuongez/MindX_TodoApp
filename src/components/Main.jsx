import Card from "./Card";
import tasks from "../data/tasks"
import taskStatus from "../data/taskStatus";
import CardContainer from "./CardContainer";

const Main = () => {

    return (
        <div className="main-container">
            {taskStatus.map((status,index) => {
                return (<CardContainer key={index} statusId={status.statusId} taskName={status.name}/>)
            })}
        </div> 
    );
}
 
export default Main;