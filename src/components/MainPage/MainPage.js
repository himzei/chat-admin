import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import Moment from "moment";
import CountDday from "./CountDday";
import ArraysDays from "./ArraysDays";

function MainPage() {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    firebase
      .firestore()
      .collection("lectures")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPeople(posts);
        setCount(posts.length);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex mb-4 mr-4 justify-end ">
          <Link to="create-member">
            <div className="mx-2 bg-blue-400 py-2 px-3 rounded text-white">
              등록하기
            </div>
          </Link>
        </div>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 border-1">
                  <tr>
                    <th
                      rowspan="2"
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center border-1"
                    >
                      No
                    </th>
                    <th
                      rowspan="2"
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-center border-1"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        최초등록
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        업데이트
                      </div>
                    </th>
                    <th
                      rowspan="2"
                      scope="col"
                      className="px-4 py-3 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                    >
                      수업정보
                    </th>
                    <th
                      rowspan="2"
                      scope="col"
                      className="px-4 py-3 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                    >
                      학생정보
                    </th>
                    <th
                      rowspan="2"
                      scope="col"
                      className="px-4 py-3 text-sm font-medium text-gray-900 uppercase tracking-wider text-center border-1"
                    >
                      수업강사
                    </th>
                    <th
                      rowspan="2"
                      scope="col"
                      className="px-4 py-3  text-xs text-gray-500 uppercase tracking-wider text-center border-1"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        수업기간
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        남은날짜
                      </div>
                    </th>
                    <th
                      rowspan="2"
                      scope="col"
                      className="px-4 py-3 text-xs  text-gray-500 uppercase tracking-wider text-center border-1"
                    >
                      <div className="text-sm font-medium text-gray-900">
                        수업요일
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        수업시간
                      </div>
                    </th>
                    <th
                      colspan="2"
                      scope="col"
                      className=" px-4 text-center py-1 text-sm font-medium text-gray-900 border-1"
                    >
                      수업횟수
                    </th>
                    <th
                      colspan="3"
                      scope="col"
                      className=" px-4 text-center py-1 text-sm font-medium text-gray-900 border-1"
                    >
                      출결
                    </th>
                    <th
                      colspan="3"
                      scope="col"
                      className=" px-4 text-center py-1 text-sm font-medium text-gray-900 border-1"
                    >
                      홀드
                    </th>
                    <th
                      rowspan="2"
                      scope="col"
                      className="px-4 py-3  text-xs text-gray-500 uppercase tracking-wider text-center border-1"
                    ></th>
                  </tr>
                  <tr className="">
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">전체</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">남은</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">출석</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">결석</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">취소</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">S</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">T</span>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-1 text-center text-sm font-medium text-gray-900 border-1"
                    >
                      <span className="">A</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person, index) => (
                    <tr key={person.id}>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {count - index}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        <div className="text-sm text-gray-900">
                          {Moment(person.createdAt).format("YYYY-MM-DD")}
                        </div>
                        <div className="text-sm text-gray-500">
                          {Moment(person.updateddAt).format("YYYY-MM-DD")}
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        {person.lecTitle}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.sImage}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.sName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.sEmail}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-center">
                        {person.lecTeacher}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {person.lecStart}~{person.lecEnd}
                        </div>
                        <div className="text-sm text-gray-500">
                          <CountDday dday={person.lecEnd} />
                        </div>
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                        <div className="text-sm font-medium text-gray-900">
                          {person.lecDate}
                        </div>
                        <div className="text-sm text-gray-500">
                          {person.lecPeriod}
                        </div>
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-medium">
                        <ArraysDays
                          startDate={person.lecStart}
                          endDate={person.lecEnd}
                          lecDate={person.lecDate}
                        />
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-medium">
                        <ArraysDays
                          startDate={Moment(new Date()).format("YYYY-MM-DD")}
                          endDate={person.lecEnd}
                          lecDate={person.lecDate}
                        />
                      </td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium "></td>
                      <td className="px-3 py-4 text-center text-sm font-medium">
                        <div className="mx-2 bg-green-400 py-2 px-1 rounded text-white">
                          수정하기
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
