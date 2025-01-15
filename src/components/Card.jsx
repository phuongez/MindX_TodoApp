import editIcon from "../assets/edit-icon.svg"
import paperClipIcon from "../assets/Icon__Paperclip.svg"
import redFlag from "../assets/Icon__RedFlag.svg"
import clock from "../assets/Icon__Clock.svg"

const Card = (props) => {
    return ( 
        <div className="card">
            <div className="taskHeader">
                <p className="taskTitle">{props.title}</p>
                <img src={editIcon} alt=""/>
            </div>
            <p className="taskDetail">{props.description}</p>
            <div className="creator">{props.creator}</div>
            <hr />
            <div className="taskFooter">
                <div className="attachFiles">
                    <img src={paperClipIcon} alt="" />
                    <p className="fileNumbers">{props.fileNumbers}</p>
                </div>
                <img src={redFlag} alt="" />
                <div className="timeRemain">
                    <img src={clock} alt="" />
                    <p className="deadline">{props.deadline}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Card;