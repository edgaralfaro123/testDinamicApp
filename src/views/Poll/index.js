import React from 'react'
import Button from '../../components/common/Button'
import Menu from '../../components/common/Menu'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Poll =()=>{
    const poll = useSelector(state => state?.questionReducer?.questions)
    const history = useHistory();
    const sendRequest =(item)=>{
        history.push({pathname: '/DetailPoll',state: item  });
    }
    return (
        <>
            <Menu/>
            <div className="row">
                <ul>
                {poll.map((item,key)=>(
                    <li key={key}><Button className="btn col-sm-12 glyphicon glyphicon-search" label={item.name} sendRequest={()=>sendRequest(item.data)} /></li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default Poll