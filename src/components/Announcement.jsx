import React, { useState } from 'react';
import { useNavigate } from 'react-router';
const Announcement = ({ options, type }) => {
const navigate = useNavigate();
    return (
        <div className="pt-1 w-full inline-block text-left">
            <div className="w-full rounded-b-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1 mb-5">
                    {options.map((ann) => (
                        ann.loai === type ? (
                            <div onClick={()=> navigate(`/thong-bao/${ann._id}`)} key={ann._id} className="flex flex-col justify-between px-4 py-2 hover:bg-zinc-300">
                                <div className='flex flex-col'>
                                    <label className='font-bold'> {ann.ten} </label>
                                    <p className='font-thin italic'> {ann.createdAt}</p>
                                </div>
                                <div>
                                    <label className=''>{ann.noiDung.slice(0, 100)}...</label>
                                </div>
                            </div>
                        ) : type === null?(
                            <div onClick={()=> navigate(`/thong-bao/${ann._id}`)} key={ann._id} className="flex flex-col justify-between px-4 py-2 hover:bg-zinc-300">
                                <div className='flex flex-col'>
                                    <label className='font-bold'> {ann.ten} </label>
                                    <p className='font-thin italic'> {ann.createdAt}</p>
                                </div>
                                <div>
                                    <label className=''>{ann.noiDung.slice(0, 100)}...</label>
                                </div>
                            </div>
                        ): null
                    ))}

                    
                    <div className="flex pt-2 justify-end items-end px-2">
                        {type !== null ? (
                        <p onClick={()=>navigate("/thong-bao")} className="text-cyan-600 hover:text-cyan-900 cursor-pointer font-medium">Xem thêm</p>
                    ):(console.log(type))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Announcement;
