import React, { useState } from 'react'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import './register.css'
import { valid , messageBox } from '../../utils/funtionsGeneric'
import { useDispatch ,useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const users = useSelector(state => state?.userReducer?.users)
    const [data, setData] = useState({ email: '', password: '' , name:'' ,passwordRepeat:''})
    const [showPassword, setshowPassword] = useState(true)
    const onChangeData = (event, name) => {
        const { target: { value = '' } = {} } = { ...event }
        setData({ ...data, [name]: value });
    }
    console.log('users',users);

    const sendRequest = () => {
        const emailValidate=valid(data)
        if(Object.keys(emailValidate).length === 0){
            if(data.password != data?.passwordRepeat){
                messageBox('Atención','Por favor, las contraseñas no coinciden.')
            }else{
                dispatch({ type: 'ADD_USER', payload: {user: [...users,{email: data.email,password: data.password ,name: data.name ,type:'2'}]} });
                messageBox('Éxito!','Registro exitoso','success')
                history.push(`/login`);
            }
        }else{
            messageBox('Atención',emailValidate.message)
        }
    }

    const showpassword = () => {
        setshowPassword(!showPassword)
    }

    return (
        <>
            <div className="row justify-content-center m-0">
                <div className="col-lg-4 cardContainer  mt-5 p-4">
                    <h2 className="text-center font-weight-bold">Registrar</h2>
                    <label>Correo</label>
                    <Input onChange={(event) => onChangeData(event, 'email')} type='email' maxLength={30} />
                    <label>Nombre</label>
                    <Input onChange={(event) => onChangeData(event, 'name')} type='text' maxLength={50} />
                    <label>Contraseña</label>
                    <Input onChange={(event) => onChangeData(event, 'password')} type={showPassword && 'password'}
                        showPassword={showPassword} action={showpassword} showButton maxLength={20} />
                    <label>Validar Contraseña</label>
                    <Input onChange={(event) => onChangeData(event, 'passwordRepeat')} type={showPassword && 'password'}
                        showPassword={showPassword} action={showpassword} showButton maxLength={20} />
                    <br />
                    <Button className="btn col-sm-12 glyphicon glyphicon-search" label='Registrar' sendRequest={sendRequest} />
                </div>
            </div>
        </>
    )
}

export default Register