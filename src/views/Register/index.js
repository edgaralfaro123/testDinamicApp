import React,{useState} from 'react'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'

const Register =()=>{
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
                    <h2>Registrar</h2>
                    <label>Correo</label>
                    <Input onChange={(event) => onChangeData(event, 'email')} type='email' maxLength={30}/>
                    <label>Nombre</label>
                    <Input onChange={(event) => onChangeData(event, 'name')} type='text' maxLength={50}/>
                    <label>Contraseña</label>
                    <Input onChange={(event) => onChangeData(event, 'password')}  type={showPassword && 'password' }
                    showPassword={showPassword}  action={showpassword} showButton  maxLength={20}/>
                    <label>Validar Contraseña</label>
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

export default Register