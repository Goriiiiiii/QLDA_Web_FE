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
                <div>
                    <p>Nguyện chạy deadline cùng bạn đến cùng</p>
                </div>
            </div>
            <div className="flex flex-col w-1/3">
                <div className="py-2">
                    <p className="font-semibold text-xl">Liên hệ</p>
                </div>
                <div className="py-2">
                    <a href="#">Trần Tuấn Minh - 21522346</a>
                </div>
                <div className="py-2">
                    <a href="#">Trần Tuấn Minh - 21522346</a>
                </div>
                <div className="py-2">
                    <a href="#">Trần Tuấn Minh - 21522346</a>
                </div>
                <div className="py-2">
                    <a href="#">Trần Tuấn Minh - 21522346</a>
                </div>

            </div>
            <div className="flex flex-col w-1/3">
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