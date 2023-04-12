import React from 'react'
import {Form,Checkbox,Button} from 'semantic-ui-react'
import {I} from './Api'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [fristName,SetFristName] = useState('')
    const [lastName,SetLastName] = useState('')
    const [checked,SetChecked] = useState(false)

    const navigate = useNavigate();

    const A =async()=>{
        await axios.post(I,{
            fristName,
            lastName,
            checked
        })
        navigate('/rd')
    }
  return (
    <Form>
        <Form.Field>
            <input placeholder='FristName' value={fristName} onChange={event=>SetFristName(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <input placeholder='LastName' value={lastName} onChange={event=>SetLastName(event.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Checkbox label='Apply' checked={checked} onChange={()=>SetChecked(!checked)}/>
        </Form.Field>
        <Button onClick={A}>Submit</Button>
    </Form>
    
  )
}

export default Create