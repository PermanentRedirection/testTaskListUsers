import { ListGroup } from "react-bootstrap";
import { useEmployeeContext } from "../useContext";
import { Dispatch, SetStateAction } from "react";

const UserList = ({ open, setOpen }: {open: boolean, setOpen:Dispatch<SetStateAction<boolean>>;}) => {
    const { users, userId, setUserId } = useEmployeeContext()

    return (
        <ListGroup className='userList'>
            {users.map(item =>(
            <ListGroup.Item style={{display:'flex', gap:'20px'}}>
                <span>{item.firstName} {item.lastName}</span>
                <span>{item.position}</span>
                <span className='button' onClick={()=>{
                        setOpen(!open)
                        userId !== item.id ? setUserId(item.id): setUserId(null)
                }}> {userId !== item.id? 'work hours' : 'x'}</span>
            </ListGroup.Item>))}
        </ListGroup>
    )
}
export default UserList;