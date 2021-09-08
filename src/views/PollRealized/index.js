import React from 'react'
import Button from '../../components/common/Button'
import Menu from '../../components/common/Menu'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
const PollRealized =()=>{
    const poll = useSelector(state => state?.responseReducer?.response)
    const history = useHistory();
    const sendRequest =(data)=>{
        history.push({pathname: '/detailpollrealized',data});
    }
    return (
        <>
            <Menu/>
            <div className="row col-lg-6" >
                <table className="table m-5">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Usuario</th>
                            <th scope="col">Email</th>
                            <th scope="col"> Acción</th>
                        </tr>
                    </thead>
                    {poll.map((item,key)=>(
                       <tr key={key}>
                            <td > {item.users.name}</td>
                            <td>{item.users.email}</td>
                            <td><Button className="btn col-sm-8 glyphicon glyphicon-search" label={item.name_poll} sendRequest={()=>sendRequest(item)} /></td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default PollRealized