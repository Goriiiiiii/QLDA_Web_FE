import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
// import {NavLink} from "react-router"

const Header = () => {
    const userID = localStorage.getItem("id")
const[chucVu, setChucVu] = useState(false)
const[visible, setVisible] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:8081/v1/api/getNhanVien/` + userID )
            .then(res => {

                setChucVu(res.data.truongPhong);
                
            })
            .catch(err => {
                console.log(err)
            })


    }, []);
    useEffect(() => {
        if (chucVu==false)
            {
                setVisible("")
            }

    }, []);

    const [isLogin, setIsLogin] = useState(true);
    const [userDropdown, setUserDropdown] = useState(false)
    const navigate = useNavigate()
    function toogleUserDropdown() {
        setUserDropdown(!userDropdown)

    }
    function handleLogOut (){
        localStorage.clear()
        navigate("/")
    }
    let userRef = useRef();
    useEffect(()=>{
        let handler = (e) =>{
            if(!userRef.current.contains(e.target))
            setUserDropdown(false);
        }
        document.addEventListener("mousedown", handler);    
    }
    )
    return (
        <div className="fixed w-full p-5 bg-[#A0E9FF]">
            
                <div className=" h-auto place-items-center w-full flex flex-row justify-between">
                    <div className="text-center w-1/5 h-full flex border-bg-red col-lg justify-center items-center">
                    <Link to="/trang-chu">
                        <p className="hover:text-white text-3xl font-bold text-black cursor-pointer">
                            Công ty ABC
                        </p>
                        </Link>
                    </div>

                    <div className=" flex flex-row w-3/5 justify-between items-center h-auto">

                        <div className='h-full w-4/5 ml-5 text-black  flex flex-row justify-between'>
                            <div>
                            <Link to="/gui-yeu-cau">
                                <a href="#" className={'cursor-pointer hover:text-red-500 '}>Tạo yêu cầu</a>
                                </Link>
                            </div>
                            <div className="">
                            <Link to="/yeu-cau-can-xu-ly">
                                <a href="#" className={'cursor-pointer hover:text-red-500 ' + visible}>Xét yêu cầu</a>
                                </Link>
                            </div>
                            <div className="">
                            <Link to="/tao-thong-bao">
                                <a href="#" className={'cursor-pointer hover:text-red-500 ' + visible}>Tạo thông báo</a>
                                </Link>
                            </div>
                            <div className="">
                            <Link to="/dang-ky-phong-hop">
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Đăng ký phòng họp</a>
                                </Link>
                            </div>
                            <div>
                            <Link to="/lich-phong-hop">
                                <a href="#" className='cursor-pointer hover:text-red-500 '>Lịch phòng họp</a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/5 flex flex-col justify-center items-center relative">
                            {isLogin ?
                                (

                                    <div className="relative w-full">
                                        <div className="flex justify-center">
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            className="text-black text-2xl cursor-pointer"
                                         onClick={toogleUserDropdown}
                                        />
                                        </div>
                                        {userDropdown && (
                                        <div ref={userRef} className="mt-3 bg-cyan-300 rounded-xl w-[140%] -inset-x-14 absolute flex flex-col justify-center items-center">
                                            <ul className="w-full font-semibold pl-2">
                                            <Link to="/tai-khoan">
                                            <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700">Thông tin tài khoản</li>
                                            </Link>

                                            <Link to="/danh-sach-nhan-vien">
                                            <li className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700">Quản lý nhân viên</li>
                                            </Link>
                                            <li onClick={handleLogOut} className="w-full rounded-md py-5 hover:text-zinc-100 hover:bg-cyan-700">Đăng xuất</li>
                                            </ul>
                                        </div>
                                        )}
                                    </div>

                                ) :
                                (
                                    <button className="border border-red-400 hover:bg-red-400 rounded-xl px-3 py-3 text-center"> Đăng nhập</button>
                                )
                            }
                        </div>
                    </div>
                </div>

            
        </div>

    )
}
export default Header