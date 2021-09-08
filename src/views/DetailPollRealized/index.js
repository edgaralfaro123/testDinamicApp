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

    useEffect(() => {
        const filterPoll = poll.filter((item)=>item.id === data.id_poll )
        setPollrealized(filterPoll[0].data)
    }, [])

    return (
        <>
            <div className="row justify-content-center m-0">
                <div className="col-lg-4 cardContainer  mt-2 p-5">
                    <h3 className='text-center'>Encuesta</h3>
                    {pollrealized.map((item,key)=>{
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
                                        data?.data?.[`question_${item.question_id}`].length>0 ?
                                            data?.data?.[`question_${item.question_id}`].map((res)=> (
                                                `${res.response}` === `question_${question.id}` &&
                                                    <><label><input disabled key={key} className='form-check-input' checked ={res.check}  type="checkbox" id={question.id} value={`question_${question.id}`}/>{question.request}</label><br/></>
                                            ))
                                        :
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