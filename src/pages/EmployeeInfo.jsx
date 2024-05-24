import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { AppContexts } from '../contexts/AppContexts';
import { useParams } from 'react-router-dom';
const EmployeeInfo = () => {
    const {employees} = useContext
    const userID = localStorage.getItem("id");


    const [date, setDate] = useState(null)
    const [isPhongBanDisable, setPhongBanDisable] = useState(true)
    const [isChucVuDisable, setChucVuDisable] = useState(true)
    // const handlePhongBan =() =>{
    //     setPhongBanDisable(false)
    // }

    return (

        <div className="flex flex-col min-h-screen relative items-center">
            <Header />
            <div className=" pt-28 pb-96  flex flex-col flex-grow w-3/5 items-center justify-center ">
                <div className='mt-8 shadow-xl flex flex-col justify-between items-center w-10/12'>
                    <div>
                        <image  />
                    </div>
                    <div className='py-5 pb-5  flex flex-row w-4/5'>
                        <div className='flex basis-1/5'>
                            <p>Họ và tên</p>
                        </div>
                        <div className='flex basis-3/5'>
                            <input className='border py-1 rounded-md pl-3 w-full'></input>
                        </div>
                    </div>
                    <div className='py-5 pb-5  flex flex-row w-4/5'>
                        <div className='flex basis-1/5'>
                            <p>Số điện thoại</p>
                        </div>
                        <div className='flex basis-3/5'>
                            <input className='border py-1 rounded-md pl-3 w-full'></input>
                        </div>
                    </div>
                    <div className='py-5 pb-5  flex flex-row w-4/5'>
                        <div className='flex basis-1/5'>
                            <p>Ngày sinh</p>
                        </div>
                        <div className='flex basis-3/5'>
                            <input className='border py-1 rounded-md pl-3 w-full'></input>
                        </div>
                    </div>
                    <div className='py-5 pb-5  flex flex-row w-4/5'>
                        <div className='flex basis-1/5'>
                            <p>Phòng ban</p>
                        </div>
                        <div className='flex basis-3/5'>
                            <input disabled={isPhongBanDisable} className='border py-1 rounded-md pl-3 w-full'></input>
                        </div>
                    </div>
                    <div className='py-5 pb-5  flex flex-row w-4/5'>
                        <div className='flex basis-1/5'>
                            <p>Chức vụ</p>
                        </div>
                        <div className='flex basis-3/5'>
                            <input disabled={isChucVuDisable} className='border py-1 rounded-md pl-3 w-full'></input>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <button className='px-3 py-3 bg-sky-200 rounded-lg hover:bg-sky-400'>Cập nhật thông tin</button>
                        </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default EmployeeInfo