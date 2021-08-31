import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";

function Tail() {
  return (
    <div className="">
      <div className=" py-4  border-t-2">
        <div className="max-w-5xl mx-auto py-2">
          <div className="flex">
            <img
              className="mr-6"
              src="images/logo1.png"
              width="110px"
              height="50px"
              alt="logo1"
            />
            <img
              className="mr-3"
              src="images/logo2.png"
              width="140px"
              height="50px"
              alt="logo2"
            />
            <img
              className="mr-3"
              src="images/logo3.png"
              width="140px"
              height="50px"
              alt="logo3"
            />
          </div>
          <div></div>
        </div>
      </div>
      <div className="border-t-2 bg-gray-100">
        <div className="max-w-5xl mx-auto flex justify-between items-center py-6">
          <div>
            <h6 className="texl-xl font-light text-gray-600">
              대구아이캔 | 대구광역시 중구 국채보상로 123길 16, 3층 대표번호 :
              053-242-5454 사업자등록번호 513-61-00074
            </h6>
            <h6 className="texl-xl font-light text-gray-600 uppercase">
              copyright all rights reserved {new Date().getFullYear()} by ican
            </h6>
          </div>
          <div className="flex">
            <GrInstagram className="text-2xl mx-1" />
            <FaFacebookSquare className="text-2xl mx-1" />
            <SiBloglovin className="text-2xl mx-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tail;
