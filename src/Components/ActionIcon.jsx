import React from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

export default function ActionIcon({action, ...props}){

    const icons = {
        rock: FaHandRock,
        paper: FaHandPaper,
        scissors: FaHandScissors,
    };

    const Icon = icons[action]

    return (
        <Icon {...props}/>
    )

}