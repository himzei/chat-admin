import React from "react";
import { MdAccountBalance } from "react-icons/md";

function Header() {
  return (
    <>
      <div
        className="max-w-5xl py-4 mx-auto font-medium flex items-center justify-between bg-fixed"
        style={{ zIndex: 2, position: "relative" }}
      >
        <div>
          <ul className="flex font-medium text-xl">
            <li className="pr-3">
              <MdAccountBalance className="text-4xl transform -translate-y-1" />
            </li>
            <li className="px-3">종만서비스</li>
            <li className="px-3">종만시스템</li>
            <li className="px-3">종만피플</li>
            <li className="px-3">블로그</li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center">
            <li className="mx-2">로그인</li>
            <li className="mx-2">회원가입</li>
            <li className="mx-2 bg-blue-400 py-2 px-3 rounded text-white">
              상담신청하기
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
