import {ReactComponent as CheckSVG}  from './CheckIcon.svg'
import {ReactComponent as DeleteSVG}  from './DeleteIcon.svg'
import {ReactComponent as EditSVG}  from './EditIcon.svg'

import './TodoIcon.css'

const iconTypes = {
    "check" : (color) => <CheckSVG  className="Icon-svg" fill={color}/>,
    "delete" : (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
    "edit" : (color) => <EditSVG className="Icon-svg" fill={color}/>
};

function TodoIcon({type, color, onClick}){
    return(
        <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon}