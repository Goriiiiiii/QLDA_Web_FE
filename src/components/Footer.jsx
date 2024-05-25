import React from "react";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
// import {NavLink} from "react-router"
const Footer = () => {
    return (
        <div className="border flex flex-row p-10 bg-[#A0E9FF] text-neutral-content absolute bottom-0 w-full">
            <div className="flex flex-col w-1/3">
                <div>
                    <h2 className="text-2xl font-bold">Công ty ABC</h2>
                </div>
                <div className="py-5">
                    <p>Luôn sẵn sàng vì một tương lai tươi sáng hơn</p>
                </div>
            </div>
            <div className="flex flex-col w-1/3 px-10">
                <div className="py-2">
                    <p className="font-semibold text-xl">Liên hệ</p>
                </div>
                <div className="flex flex-row">

                    <div>
                        <p className="py-2"> Trần Tuấn Minh</p>
                        <p className="py-2"> Nguyễn Võ Hoàng Huy</p>
                        <p className="py-2"> Trương Vĩnh Tiến</p>
                        <p className="py-2"> Ngô Anh Tuấn</p>
                    </div>
                    <div className="px-3">
                        <p className="py-2"> -</p>
                        <p className="py-2"> -</p>
                        <p className="py-2"> -</p>
                        <p className="py-2"> -</p>
                    </div>
                    <div className="px-3">
                        <p className="py-2">  21522346</p>
                        <p className="py-2">   21522162</p>
                        <p className="py-2">   21520481</p>
                        <p className="py-2">  21521629</p>
                    </div>
                </div>

                

            </div>
            <div className="flex flex-col w-1/3 px-16 ">
                <div className="py-2 pl-2 flex">
                    <p className="font-semibold text-xl">Theo dõi chúng tôi tại</p>
                </div>

                <div className="py-1 flex flex-row w-1/4 justify-between items-center">
                    <FaFacebook className="cursor-pointer w-1/3" />
                    <div className="w-2/3">
                        <p>Facebook</p>
                    </div>
                </div>
                <div className="py-1 flex flex-row w-1/4 justify-between items-center">
                    <FaTwitter className="cursor-pointer w-1/3" />
                    <div className="w-2/3">
                        <p>Twitter </p>
                    </div>
                </div>
                <div className="py-1 flex flex-row w-1/4 justify-between items-center">
                    <FaYoutube className="cursor-pointer w-1/3" />
                    <div className="w-2/3">
                        <p>Youtube</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer