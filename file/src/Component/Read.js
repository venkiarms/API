import axios from 'axios'
import React, { useState,useEffect } from 'react'
import {Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from 'semantic-ui-react'
import { I } from './Api'

const Read = () => {
    const [apiData, setApiData] = useState([])

    const getData = async()=>{
        const resp = await axios.get(I)
        setApiData(resp.data)
    }

    useEffect(()=>{
        getData();
    })
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeaderCell>FristName</TableHeaderCell>
                <TableHeaderCell>LastName</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
        </TableHeader>
        {apiData.map(data=>(
            <TableBody>
            <TableRow key={data.id}>
                <TableCell>{data.fristName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell>{data.checked ? 'Active' : 'de-Activate'}</TableCell>
            </TableRow>
        </TableBody>

        ))}
        
    </Table>
  )
}

export default Read