import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AddEmployee = () => {
    const [date2, setDate2] = useState(null)
    const [date, setDate] = useState(null)
    
    // const handleDateChange = (e.target.value) => {
    //     setBirthDay(e.target.value);
    // }
    const formatDate = (value) =>{
        const [year, month, day] = value.split('-');
        return `${day}/${month}/${year}`
    }  
    const handleDateChange = (e) => {
        let value = formatDate(e.target.value);
        setDate2(value);
    }
    console.log(date2);

    return (

        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="pt-28 pb-96 flex flex-col flex-grow w-full items-center justify-center">
                <div className="flex flex-col w-2/5 bg-white shadow-xl rounded-xl ">
                    <div className="flex justify-center items-center py-5">
                        <h1 className="font-bold text-2xl">Thêm nhân viên</h1>
                    </div>
                    <div className="pl-10 pr-5 flex flex-row">
                        <div className="flex justify-center items-center basis-1/4">
                            <label className="w-full py-2 font-semibold text-lg text-left">Tên nhân viên</label>
                        </div>
                        <div className="basis-3/4 py-2 px-4">
                            <input
                                className="text-gray-700 text-lg border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                required
                            />
                        </div>
                    </div>
                    <div className="pl-10 pr-5 flex flex-row">
                        <div className="flex justify-center items-center basis-1/4">
                            <label className="w-full py-2 font-semibold text-lg text-left">Số điện thoại</label>
                        </div>
                        <div className="basis-3/4 py-2 px-4">
                            <input
                                className="text-gray-700 text-lg border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                required
                            />
                        </div>
                    </div>
                    <div className="pl-10 pr-5 flex flex-row">
                        <div className="flex justify-center items-center basis-1/4">
                            <label className="w-full py-2 font-semibold text-lg text-left">Ngày sinh</label>
                        </div>
                        
                        <div className="basis-3/4 py-2 px-4">
                            <input
                                className="text-gray-700 text-lg border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                required
                                type="date"
                                value={date}
                                onChange = {e => handleDateChange(e)}
                                format ="dd-MM-yyyy"
                            />
                        </div>   
                    </div>
                    <div className="pl-10 pr-5 flex flex-row">
                        <div className="flex justify-center items-center basis-1/4">
                            <label className="w-full py-2 font-semibold text-lg text-left">Phòng ban</label>
                        </div>
                        <div className="basis-3/4 py-2 px-4">
                            <input
                                className="text-gray-700 text-lg border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                required
                            />
                        </div>
                    </div>
                    <div className="pl-10 pr-5 flex flex-row">
                        <div className="flex justify-center items-center basis-1/4">
                            <label className="w-full text-left py-2 font-semibold text-lg">Tài khoản</label>
                        </div>
                        <div className="basis-3/4 py-2 px-4">
                            <input
                                className="text-gray-700 text-lg border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                required
                            />
                        </div>
                    </div>
                    <div className="pl-10 pr-5 flex flex-row">
                        <div className="flex justify-center items-center basis-1/4">
                            <label className="w-full text-left py-2 font-semibold text-lg">Mật khẩu</label>
                        </div>
                        <div className="basis-3/4 py-2 px-4">
                            <input
                                className="text-gray-700 text-lg border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                required
                                type="password"
                            />
                        </div>
                    </div>
                    <div className=" flex justify-center items-center py-5">
                        <button className="bg-cyan-200 rounded-xl text-zinc-500 text-lg px-16 py-2 hover:bg-cyan-700 hover:text-white ">Thêm nhân viên</button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddEmployee;
