import React,{useState} from 'react'
import Button from '../../components/common/Button'
import './DetailPoll.css'
import { useDispatch ,useSelector} from 'react-redux'
import { messageBox } from '../../utils/funtionsGeneric'
import { useHistory } from 'react-router-dom'
const DetailPoll =(props)=>{
    const {state,id, name} = props.location
    const history = useHistory();
    const questions = useSelector(state => state?.responseReducer?.response)
    const users = useSelector(state => state?.loginReducer?.user)
    console.log('state',state);
    const dispatch = useDispatch();
    const [data, setData] = useState([])
    const onChangeSelect = (item,question_id,type) => {
        const { target: { value = "" ,checked } = {} } = { ...item };
        switch(type) {
            case 'multiple':
                //Validamos si la pregunta ya esta en el array
                const check = data[`question_${question_id}`] ?? []
                if(check.length>0){
                    //En caso de que se encuentre en el array procedemos a obtener
                    const response = check.filter((item)=> item.response !== `${value}`)
                    setData({...data , [`question_${question_id}`] : [...response, {type, response: value, check: checked} ] } );
                }else{
                    setData({...data , [`question_${question_id}`] : [ {type, response: value, check: checked} ] } );
                }
            break;
            default:
                //Caso free y unique
                setData({...data,  [`question_${question_id}`] : { type, response: value} });
        }
    }
    console.log('data',data);
    const send = ()=> {
        dispatch({ type: 'ADD_RESPONSE', payload: [...questions,{ data, users,id_poll: id, name_poll: name }] });
        messageBox('Éxito!','Registro exitoso','success')
        history.push(`/Poll`);
    }

    return (
        <>
            <div className="row justify-content-center m-0">
                <div className="col-lg-4 cardContainer  mt-2 p-5">
                    <h3 className='text-center'>Encuesta</h3>
                    {state.map((item,key)=>(
                        <>
                        <label key={key}><strong>{item.question}</strong></label><br/>
                        {item.type === 'free' ?
                            <textarea className ="form-control" onChange={(text)=>onChangeSelect(text,item.question_id,'free')} name="textarea" rows="6" cols="50"></textarea>
                        :
                            item.type === 'unique' ?
                                <select className ="form-control" onChange={(select)=>onChangeSelect(select,item.question_id,'unique')} name="select">
                                    <option></option>
                                    {item.request.map((question,key)=>(
                                        <option key={key} value={question.id}>{question.request}</option>
                                    ))}
                                </select>
                            :
                                item.type === 'multiple' ?
                                    item.request.map((question,key)=>(
                                        <><label><input key={key} className='form-check-input' type="checkbox" id={question.id} onChange={(checked)=>onChangeSelect(checked,item.question_id,'multiple')} value={`question_${question.id}`}/>{question.request}</label><br/></>
                                    ))
                                :
                                'Formato de pregunta incorrecta'
                        }
                        </>
                    ))}
                  <br/>
                    <Button className="btn col-sm-12 glyphicon glyphicon-search" label='Envíar' sendRequest={send} />
                </div>
            </div>
        </>
    )
}

export default DetailPoll