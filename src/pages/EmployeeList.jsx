import { useState, useContext, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { AppContexts } from "../contexts/AppContexts";


const EmployeeList = () => {

    const { employees } = useContext(AppContexts);
    const [searchInput, setSearchInput] = useState("")
    const [searchEmployees, setSearchEmployees] = useState([]);

    useEffect(() => {
        let temp = [];
        for (let i = 0; i < employees.length; i++) {
            const searchQuery = searchInput.trim().toLowerCase()
            const employeeName = employees[i].ten.toLowerCase()
            const isMatch = (employeeName.includes(searchQuery))
            if (isMatch) temp.push(employees[i])
        }
        setSearchEmployees(temp);

    }, [employees, searchInput]);

    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="pt-28 pb-96 flex flex-col flex-grow w-full items-center ">
                <div className="flex justify-center pb-5">
                    <h1 className="text-black font-bold text-xl ">Danh sách các nhân viên</h1>
                </div>
                <div className="flex flex-col w-[60%] py-3">
                    <div className="flex flex-row bg-sky-200">
                        <div className="flex basis-1/4 ">
                            <h3 className="text-xl font-normal: py-2 px-4">Tìm kiếm</h3>
                        </div>
                        <div className="flex basis-3/4 ">
                            <input className="w-full border rounded-lg px-3"></input>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {searchEmployees.length != 0 ?
                            (
                                searchEmployees.map((employee) => (                 
                                    <div key={employee._id} className="flex flex-col justify-between px-4 py-2 hover:bg-zinc-300">
                                        <div className='flex flex-col'>
                                            <label className='font-bold'> {employee.ten} </label>
                                            <p className='font-thin italic'> {employee.phongBan}</p>
                                        </div>
                                        <div>
                                            <label className=''>{employee.soDienThoai}</label>
                                        </div>
                                    </div>
                                )
                            ))

                            : (
                                <div>
                                    <p>Lỗi</p>
                                </div>
                            )}
                        

                    </div>

                </div>


            </div>
            <Footer />
        </div>
    )
}
export default EmployeeList