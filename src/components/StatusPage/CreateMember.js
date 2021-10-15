import React, { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
import { useHistory } from "react-router-dom";
import md5 from "md5";

function CreateMember() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await firebase
        .firestore()
        .collection("lectures")
        .add({
          sName: data.sName,
          sEmail: data.sEmail,
          sImage: `http://gravatar.com/avatar/${md5(data.sEmail)}?d-identicon`,
          lecTitle: data.lecTitle,
          lecTeacher: data.lecTeacher,
          lecStart: data.lecStart,
          lecEnd: data.lecEnd,
          lecDate: [
            data.lecDate1,
            data.lecDate2,
            data.lecDate3,
            data.lecDate4,
            data.lecDate5,
            data.lecDate6,
            data.lecDate7,
          ],
          lecStartTime: data.lecStartTime,
          lecPeriod: data.lecPeriod,
          createdAt: Date.now(),

          views: 0,
        });

      setLoading(false);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <div className=" max-w-5xl mx-auto">
        <div className="mt-4 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-12 sm:p-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900">
                    학생정보
                  </legend>
                  <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="sName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          학생이름
                        </label>

                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="sName"
                            id="sName"
                            className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                            placeholder="제목을 입력해주세요"
                            ref={register({ required: true })}
                          />
                        </div>
                        <div className="">
                          {errors.content &&
                            errors.content.type === "required" && (
                              <p className=" text-red-500 font-light">
                                제목을 입력하셔야 합니다.
                              </p>
                            )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        학생사진
                      </label>
                      <div className="mt-1 flex items-center">
                        <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <button
                          type="button"
                          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Change
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3 sm:col-span-2">
                        <label
                          htmlFor="sEmail"
                          className="block text-sm font-medium text-gray-700"
                        >
                          학생이메일
                        </label>

                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="text"
                            name="sEmail"
                            id="sEmail"
                            className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                            placeholder="제목을 입력해주세요"
                            ref={register({ required: true })}
                          />
                        </div>
                        <div className="">
                          {errors.sEmail &&
                            errors.sEmail.type === "required" && (
                              <p className=" text-red-500 font-light">
                                학생이메일을 입력하셔야 합니다.
                              </p>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-base font-medium text-gray-900">
                    수업정보
                  </legend>
                  <div className="mt-4 space-y-4">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lecTitle"
                        className="block text-sm font-medium text-gray-700"
                      >
                        수업정보
                      </label>
                      <select
                        id="lecTitle"
                        name="lecTitle"
                        autoComplete="lecTitle"
                        className="mt-1 block w-full py-1 px-2 border border-gray-300 text-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        ref={register({ required: true })}
                      >
                        <option value="1:1 화상영어">1:1 화상영어</option>
                        <option value="1:4 화상영어">1:4 화상영어</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="Category"
                        className="block text-sm font-medium text-gray-700"
                      >
                        수업강사
                      </label>
                      <select
                        id="Category"
                        name="lecTeacher"
                        autoComplete="category"
                        className="mt-1 block w-full py-1 px-2 border border-gray-300 text-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                        ref={register({ required: true })}
                      >
                        <option value="IISD_Lya">IISD_Lya</option>
                        <option value="lornasantos">lornasantos</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-2 sm:col-span-2">
                        <label
                          htmlFor="lecStart"
                          className="block text-sm font-medium text-gray-700"
                        >
                          수업시작
                        </label>

                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="date"
                            name="lecStart"
                            id="lecStart"
                            className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                            placeholder="제목을 입력해주세요"
                            ref={register({ required: true })}
                          />
                        </div>
                        <div className="">
                          {errors.content &&
                            errors.content.type === "required" && (
                              <p className=" text-red-500 font-light">
                                제목을 입력하셔야 합니다.
                              </p>
                            )}
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-2">
                        <label
                          htmlFor="lecEnd"
                          className="block text-sm font-medium text-gray-700"
                        >
                          수업종료
                        </label>

                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="date"
                            name="lecEnd"
                            id="lecEnd"
                            className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                            placeholder="제목을 입력해주세요"
                            ref={register({ required: true })}
                          />
                        </div>
                        <div className="">
                          {errors.lecEnd &&
                            errors.lecEnd.type === "required" && (
                              <p className=" text-red-500 font-light">
                                제목을 입력하셔야 합니다.
                              </p>
                            )}
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lecDate"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        수업요일
                      </label>
                      <div className="flex">
                        <div className="flex items-start mr-4">
                          <div className="flex items-center h-5">
                            <input
                              id="lecDate"
                              name="lecDate1"
                              type="checkbox"
                              value="월"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              ref={register()}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="lecDate1"
                              className="font-medium text-gray-700"
                            >
                              월
                            </label>
                          </div>
                        </div>
                        <div className="flex items-start mr-4">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="lecDate2"
                              type="checkbox"
                              value="화"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              ref={register()}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="lecDate2"
                              className="font-medium text-gray-700"
                            >
                              화
                            </label>
                          </div>
                        </div>
                        <div className="flex items-start mr-4">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="lecDate3"
                              type="checkbox"
                              value="수"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              ref={register()}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="lecDate3"
                              className="font-medium text-gray-700"
                            >
                              수
                            </label>
                          </div>
                        </div>
                        <div className="flex items-start mr-4">
                          <div className="flex items-center h-5">
                            <input
                              id="lecDate4"
                              name="lecDate4"
                              type="checkbox"
                              value="목"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              ref={register()}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="lecDate4"
                              className="font-medium text-gray-700"
                            >
                              목
                            </label>
                          </div>
                        </div>
                        <div className="flex items-start mr-4">
                          <div className="flex items-center h-5">
                            <input
                              id="lecDate5"
                              name="lecDate5"
                              type="checkbox"
                              value="금"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              ref={register()}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="lecDate5"
                              className="font-medium text-gray-700"
                            >
                              금
                            </label>
                          </div>
                        </div>
                        <div className="flex items-start mr-4">
                          <div className="flex items-center h-5">
                            <input
                              id="lecDate6"
                              name="lecDate6"
                              type="checkbox"
                              value="토"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              ref={register()}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="lecDate6"
                              className="font-medium text-gray-700"
                            >
                              토
                            </label>
                          </div>
                        </div>
                        <div className="flex items-start mr-4">
                          <div className="flex items-center h-5">
                            <input
                              id="lecDate7"
                              name="lecDate7"
                              type="checkbox"
                              value="일"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              ref={register()}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="lecDate7"
                              className="font-medium text-gray-700"
                            >
                              일
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                      <div className="col-span-2 sm:col-span-2">
                        <label
                          htmlFor="lecStartTime"
                          className="block text-sm font-medium text-gray-700"
                        >
                          수업시작시간
                        </label>

                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="time"
                            name="lecStartTime"
                            id="sName"
                            className="focus:ring-indigo-500 focus:border-indigo-500 border flex-1 block w-full rounded-none rounded-md sm:text-sm border-gray-300 px-2 py-1 text-sm"
                            placeholder="제목을 입력해주세요"
                            ref={register({ required: true })}
                          />
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-2">
                        <label
                          htmlFor="Category"
                          className="block text-sm font-medium text-gray-700"
                        >
                          수업시간
                        </label>
                        <select
                          id="Category"
                          name="lecPeriod"
                          autoComplete="category"
                          className="mt-1 block w-full py-1 px-2 border border-gray-300 text-gray-400 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                          ref={register({ required: true })}
                        >
                          <option value="25분">25분</option>
                          <option value="50분">50분</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="px-4 py-3 text-right sm:px-6">
                <input
                  type="submit"
                  disabled={loading}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateMember;
