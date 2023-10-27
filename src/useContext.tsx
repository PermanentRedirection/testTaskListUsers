import dbUsers from './DB/User.json'
import dbSheets from './DB/Sheets.json'
import { createContext, useContext, useEffect, ReactNode, useState, SetStateAction, Dispatch } from "react";
export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
    phone: string;
    roleId: number;
    managerId: string | null;
    address: string | null;
    postalCode: string | null;
    city: string | null;
    country: string | null;
    subDepartment: {
        id: string;
        title: string;
    } | null;
    manager: {
        id: string;
        firstName: string;
        lastName: string;
        archivedAt: string | null;
        email: string;
        phone: string;
        position: string;
        avatar: {
            link: string | null;
        } | null;
    } | null;
    avatar: {
        link: string | null;
    };
    department: {
        id: string;
        title: string;
        managerId: string;
    };
    group: null;
    division: {
        id: string;
        title: string;
        managerId: string;
    } | null;
}
export type ISheet = {
    id: string;
    assessment: number;
    breakMinutes: number;
    minutes: number;
    startTime: string;
    endTime: string;
    note: string | null;
    status: string;
    locationChecked: boolean;
    approvalPersonId: string | null;
    userId: string;
    companyId: string;
}

const EmployeeContext = createContext<{
    users: IUser[];
    sheets: ISheet[];
    userId: string | null;
    setUserId: Dispatch<SetStateAction<string |null>>;
    months:string[],
}>({
    users: [],
    sheets: [],
    userId: null,
    setUserId: () => {},
    months: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],

});

export const useEmployeeContext = () => {
    return useContext(EmployeeContext);
};

interface EmployeeProviderProps {
    children: ReactNode;
}

export const EmployeeProvider: React.FC<EmployeeProviderProps> = ({ children }) => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [sheets, setSheets] = useState<ISheet[] >([]);
    const [userId, setUserId] = useState<string | null >(null);
    const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(() => {
        setUsers(dbUsers);
        setSheets(dbSheets);
    }, [dbUsers, dbSheets]);

    return (
        <EmployeeContext.Provider value={{users, sheets, months, userId ,setUserId}}>
            {children}
        </EmployeeContext.Provider>
    );
};
