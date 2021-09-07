import React,{useState} from 'react'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'

const Login =()=>{
    const [data, setData] = useState({email:'',password:''})
    const [showPassword, setshowPassword] = useState(true)
    const onChangeData = (event,name) =>{
        const {target:{value=''}= {}} = {...event}
        setData({ ...data, [name]: value });
    }

    const sendRequest =()=>{

    }

    const showpassword = ()=>{
        setshowPassword(!showPassword)
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <h2>Inicia sesión</h2>
                    <label>Correo</label>
                    <Input onChange={(event) => onChangeData(event, 'email')} type='email' maxLength={30}/>
                    <label>Contraseña</label>
                    <Input onChange={(event) => onChangeData(event, 'password')}  type={showPassword && 'password' }
                    showPassword={showPassword}  action={showpassword} showButton  maxLength={20}/>
                    <br/>
                    <Button className="btn col-sm-12 glyphicon glyphicon-search" label='Login' sendRequest={sendRequest} />
                </div>
                <div className="col-lg-4"></div>
            </div>
        </>
    )
}

export default Login