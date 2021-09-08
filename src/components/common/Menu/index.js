import {Link} from "react-router-dom";
const Menu =()=>{
    return (
        <div className="d-flex flex-row">
            <div className="p-2"><button className='btn glyphicon glyphicon-search' style={{backgroundColor: '#254d71',color:'white'}} ><Link to="/Poll" style={{color:'white'}}>Realizar encuesta</Link></button></div>
            <div className="p-2"><button className='btn glyphicon glyphicon-search' ><Link to="/usuarios">Encuestas realizadas</Link></button></div>
        </div>
    )
}


export default Menu