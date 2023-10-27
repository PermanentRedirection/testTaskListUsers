import { useState } from "react";
import UserList from "./UserList";
import SheetList from "./SheetList";

const Content = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="content">
            <UserList open={show} setOpen={setShow}/>
            <SheetList />
        </div>
    )
}
export default Content;