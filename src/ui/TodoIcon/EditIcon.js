import React from 'react';
import {TodoIcon} from './'

function EditIcon({onEdit}){
    return(
        <TodoIcon
            type="edit"
            onClick={onEdit}
            color="gray"

        />
    )
}

export{EditIcon}