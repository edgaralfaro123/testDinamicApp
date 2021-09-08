import React from 'react'
import Button from '../../components/common/Button'
import Menu from '../../components/common/Menu'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
const PollRealized =()=>{
    const poll = useSelector(state => state?.responseReducer?.response)
    console.log('poll',poll);
    const history = useHistory();
    const sendRequest =(item,data)=>{
       /*  console.log('data',data);
        history.push({pathname: '/DetailPoll',state: item, id: data.id ,name: data.name }); */
    }
    return (
        <>
            <Menu/>
            <div className="row col-lg-6" >
                {poll.map((item,key)=>(
                    <>
                        <li>
                            <label>Usuario: {item.users.name}</label><br/>
                            <label>Email: {item.users.email}</label>
                            <Button className="btn col-sm-8 glyphicon glyphicon-search" label={item.name_poll} sendRequest={()=>sendRequest(item.data,item)} />
                            <br/>
                        </li>
                    </>
                ))}
            </div>
        </>
    )
}

export default PollRealized