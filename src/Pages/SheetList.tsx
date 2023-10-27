import {  Form, ListGroup } from "react-bootstrap";
import { ISheet, useEmployeeContext } from "../useContext";
import { useEffect, useState } from "react";

import dayjs from 'dayjs'

const SheetList = () => {
    const { users, sheets, userId, months} = useEmployeeContext()
    const [filteredData, setFilteredData] = useState<ISheet[]>([])
    const [filter, setFilter] = useState('')

    useEffect(() =>{
        setFilteredData(sheets.filter(item=> item.userId === userId)
        .filter(item=> filter ? filter === dayjs(item.startTime).format('M') : item))
    },[filter, userId])
    
    return userId ? (
        <div className="">
            <Form.Select 
                aria-label="select filter" 
                size='sm' 
                style={{ width: '200px', marginBottom: '40px' }} 
                onChange={(e)=>setFilter(e.target.value)}
            >
                <option value="0">
                    set filter
                </option>
                {months.map((month, index) => (<option key={index} value={index+1}>{month}</option>))}
            </Form.Select>

            <ListGroup>
                {filteredData.length ? filteredData.map(item =>{
                    const userName = users.filter(user=> item.userId === user.id)[0].firstName
                    console.log(userName)
                    return (
                    <ListGroup.Item style={{display:'flex', gap:'20px'}}>
                        <span>{dayjs(item.startTime).format('MMMM YYYY, dddd')}</span>
                    </ListGroup.Item>)
            }) : <div style={{minWidth: '369px', display:'flex', flexDirection:'column',}}>
                    <span>no data for this month</span>
                </div>}
            </ListGroup>
        </div>
    ) : (<></>)
}
export default SheetList;