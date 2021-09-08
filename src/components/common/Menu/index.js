import {Link,useHistory} from "react-router-dom";
import { useDispatch } from 'react-redux'
const Menu =()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const close = () => {
        dispatch({ type: 'LOGIN', payload: {user: null, token: null} });
        history.push(`/login`);
    }
    return (
        <div className="d-flex flex-row" style={{backgroundColor: 'black',color:'white'}}>
            <div className="p-2"><button className='btn glyphicon glyphicon-search' style={{backgroundColor: 'black',color:'white'}} ><Link to="/Poll" style={{color:'white'}}>Realizar encuesta</Link></button></div>
            <div className="p-2"><button className='btn glyphicon glyphicon-search' style={{backgroundColor: 'black',color:'white'}} ><Link to="/pollrealized" style={{color:'white'}}>Encuestas realizadas</Link></button></div>
            <div className="p-2"><button className='btn glyphicon glyphicon-search' style={{backgroundColor: 'black',color:'white'}} onClick={close} >Cerrar sesión</button></div>
        </div>
    )
}


export default Menu