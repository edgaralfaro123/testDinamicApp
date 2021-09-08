import React,{useState,useEffect} from 'react'
import Button from '../../components/common/Button'
import './DetailPoll.css'
import { useDispatch ,useSelector} from 'react-redux'
import { messageBox } from '../../utils/funtionsGeneric'
import { useHistory } from 'react-router-dom'
const DetailPollRealized =(props)=>{
    const {data} = props.location
    const poll = useSelector(state => state?.questionReducer?.questions)
    const [pollrealized, setPollrealized] = useState([])
    console.log('pruebaaaaaa data',data.data[`question_1`])
/*   
    console.log('poll',poll); */
    
    useEffect(() => {
        const filterPoll = poll.filter((item)=>item.id === data.id_poll )
        console.log('filterPoll.data----- >>>',filterPoll);
        console.log('data---->>>>',data);
        setPollrealized(filterPoll[0].data)
    }, [])
/*     const history = useHistory();
    const questions = useSelector(state => state?.responseReducer?.response)
    const users = useSelector(state => state?.loginReducer?.user)
    console.log('state',state);
    const dispatch = useDispatch();
    const [data, setData] = useState([]) */
    const onChangeSelect = (item,question_id,type) => {
    /*     const { target: { value = "" ,checked } = {} } = { ...item };
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
        } */
    }


    return (
        <>
            <div className="row justify-content-center m-0">
                <div className="col-lg-4 cardContainer  mt-2 p-5">
                    <h3 className='text-center'>Encuesta</h3>
                    {pollrealized.map((item,key)=>{
                        console.log('item',item);
                        return (
                        <>
                        <label key={key}><strong>{item.question}</strong></label><br/>
                        {item.type === 'free' ? (
                                data?.data?.[`question_${item.question_id}`]?.response != undefined  ? (
                                    <textarea disabled className ="form-control" value={data?.data?.[`question_${item.question_id}`]?.response} name="textarea" rows="6" cols="50"></textarea>
                                ):(
                                    <textarea disabled className ="form-control" name="textarea" rows="6" cols="50"></textarea>
                                )
                            )
                        :
                            item.type === 'unique' ?
                                <select  disabled className ="form-control" name="select">
                                    <option></option>
                                    {item.request.map((question,key)=>(
                                        data?.data?.[`question_${item.question_id}`]?.response == question.id  ? (
                                            <option  key={key} selected value={question.id}>{question.request}</option>
                                        ) : (
                                            <option  key={key} value={question.id}>{question.request}</option>
                                        )
                                    ))}
                                </select>
                            :
                                item.type === 'multiple' ?
                                    item.request.map((question,key)=>(
                                        <><label><input disabled key={key} className='form-check-input' type="checkbox" id={question.id} value={`question_${question.id}`}/>{question.request}</label><br/></>
                                    ))
                                :
                                'Formato de pregunta incorrecta'
                        }
                        </>
                    )})}
                </div>
            </div>
        </>
    )
}

export default DetailPollRealized