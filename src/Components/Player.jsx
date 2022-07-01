import React from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import ActionIcon from './ActionIcon';

export default function Player({name = "Player", score = 0, action = "rock"}) {

    return (
        <div className='player'>
            <div className='score'> {`${name}: ${score}`}</div>
              <div className='action'>
              <ActionIcon action={action} size={60}/>
              </div>
            </div>
    )

}