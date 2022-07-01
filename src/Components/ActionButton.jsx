import React from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import ActionIcon from './ActionIcon';

export default function ActionButton({action = "rock"}){

    return (
        <button className="rnd-btn">
            <ActionIcon action={action} size={20}/>
        </button>
    )

}