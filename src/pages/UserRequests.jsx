import { useState, useContext, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { TiDelete } from "react-icons/ti";
import { AppContexts } from "../contexts/AppContexts";
import axios from "axios";
import { useNavigate } from "react-router";
const [datas, setDatas] = useState([])
const UserRequests = () => {

    const userID = localStorage.getItem("id")


    const navigate = useNavigate()
    
    useEffect(() => {
        axios.get(`http://localhost:8081/v1/api/getYeuCauHandle?nhanVienId=` + userID )
            .then(res => {

                    setDatas(res.data)
                
            })
            .catch(err => {
                console.log(err)
            })


    }, [userID]);

    
    return (
        <div className="flex flex-col min-h-screen relative">
            <Header />
            <div className="pt-28 pb-96 flex flex-col flex-grow w-full items-center ">
                <div className="flex flex-col w-[60%] py-3">
                    <div className="flex flex-col">
                    <div  className="flex flex-row justify-between px-4 py-2">
                                        <div className='flex flex-row basis-5/6'>
                                            <label className='font-bold flex w-1/2'> Yêu cầu </label>
                                            <p className='font-bold flex w-1/2 text-center'> Phản hồi</p>
                                        </div>
                                        <div className="font-bold flex basis-1/6 items-center justify-between">
                                            <label className=''>Tình Trạng</label>
                                            
                                        </div>
                                    </div>
                        
                                {datas.map((data) => (
                                    <div key={data._id} className="flex flex-row justify-between px-4 py-2 hover:bg-cyan-400">
                                        <div className='flex flex-row basis-5/6'>
                                            <label className='font-medium flex w-1/2'> {data.nhanVienId.ten} </label>
                                            <p className='font-normal flex w-1/2 text-center'> {request.yeuCauId.ten}</p>
                                        </div>
                                        <div className="flex basis-1/6 items-center justify-between">
                                            <label className={`${request.pheDuyet == true ?"text-green-500": request.pheDuyet == false? "text-red-500":"text-blue-700"}`}>
                                                {request.pheDuyet == true ?"Đã duyệt": request.pheDuyet == false? "Đã từ chối":"Chưa xử lý"}
                                                </label>
                                            <TiDelete onClick={() => {handleDeleteBtn(request._id)}} className="size-8 hover:text-red-500 cursor-pointer"/>
                                        </div>
                                    </div>
                                )
                                )}

                            


                    </div>

                </div>


            </div>
            <Footer />
        </div>
    )
}
export default UserRequests