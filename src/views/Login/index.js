import React, { useState } from 'react'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import { useHistory } from 'react-router-dom'
import './login.css'
import { valid,messageBox } from '../../utils/funtionsGeneric'
import { useDispatch ,useSelector} from 'react-redux'
const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const users = useSelector(state => state?.userReducer?.users)
    console.log('users',users);
    const [data, setData] = useState({ email: '', password: '' })
    const [ showPassword , setshowPassword ] = useState(true)
    const onChangeData = (event, name) => {
        const { target: { value = '' } = {} } = { ...event }
        setData({ ...data, [name]: value });
    }

    const sendRequest = () => {
        const emailValidate=valid(data)
        if(Object.keys(emailValidate).length === 0){
            const result = users.filter((item)=>item.email === data.email && item.password  === data.password)
            if(result.length>0){
                dispatch({ type: 'LOGIN', payload: {user: result[0], token: 'c3b50ca9dbcddf2d873b2d1ce6abb7e99bc7adc35ed85245eb7bd78887546448'} });
                history.push(`/Poll`);
            }else{
                messageBox('Atención','Datos incorrectos')
            }
            console.log('result',result);
        }else{
            messageBox('Atención',emailValidate.message)
        }
    }

    const showpassword = () => {
        setshowPassword(!showPassword)
    }
    const sendRegister = () => {
        history.push(`/register`);
    }

    return (
        <>
            <div className="row justify-content-center m-0">
                <div className="col-lg-4 cardContainer  mt-5 p-4">
                    <h2 className="text-center font-weight-bold">Inicia sesión</h2>
                    <label>Correo</label>
                    <Input onChange={(event) => onChangeData(event, 'email')} type='email' maxLength={30} />
                    <label>Contraseña</label>
                    <Input onChange={(event) => onChangeData(event, 'password')} type={showPassword && 'password'}
                        showPassword={showPassword} action={showpassword} showButton maxLength={20} />
                    <br />
                    <Button className="btn col-sm-12 glyphicon glyphicon-search" label='Login' sendRequest={sendRequest} />
                    <br />
                    <br />
                    <Button className="btn col-sm-12 glyphicon glyphicon-search" label='Registrar' sendRequest={sendRegister} />
                </div>
            </div>
        </>
    )
}

export default Login