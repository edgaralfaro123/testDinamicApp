import React,{useState} from 'react'
import Button from '../../components/common/Button'

const DetailPoll =(props)=>{
    const {state} = props.location
    const [data, setData] = useState([])

    const onChangeSelect = (item,question_id,type) => {
        const { target: { value = "" ,checked } = {} } = { ...item };
        switch(type) {
            case 'multiple':
                //Validamos si la pregunta ya esta en el array
                const check = data[`question_${question_id}`] ?? []
                if(check.length>0){
                    //En caso de que si este en el array procedemos a obtener 
                    const response = check.filter((item)=> item.response !== `${value}`)
                    setData({...data , [`question_${question_id}`] : [...response, {type, response: value, check: checked} ] } );
                }else{
                    setData({...data , [`question_${question_id}`] : [ {type, response: value, check: checked} ] } );
                }
            break;
            default:
                //
                setData({...data,  [`question_${question_id}`] : { type, response: value} });
        }
    }
    console.log('data',data);
    return (
        <>
            <div className="row">
                <ul>
                {state.map((item,key)=>(
                    <>
                    <label key={key}>{item.question}</label><br/>
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
                </ul>
            </div>
        </>
    )
}

export default DetailPoll