import React from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const Calendar = () => {
  return (
    <>
      <div className="flex w-[100%]">
        <div className="w-[100%]">
          <div className=" bg-white rounded-t">
            <div className="flex items-center justify-between">
              <h1 className="text-[18px] font-semibold text-black pl-[12px]">
                October 2023
              </h1>
              <div className=" w-[25%] flex justify-between items-center text-gray-400">
                <span className="flex justify-center items-center border-1 border-solid border-black-500 rounded-[50%] text-[14px] p-[7px]">
                  <LeftOutlined />
                </span>
                <span className="flex justify-center items-center border-1 border-solid border-black-500 rounded-[50%] text-[14px] p-[7px]">
                  <RightOutlined />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[14px] font-sans font-normal  text-gray-300">
                          Mon
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[14px] font-sans font-normal  text-gray-300">
                          Tue
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[14px] font-sans font-normal  text-gray-300">
                          Wed
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[14px] font-sans font-normal  text-gray-300">
                          Thu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[14px] font-sans font-normal  text-gray-300">
                          Fri
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[14px] font-sans font-normal  text-gray-300">
                          Sat
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-[14px] font-sans font-normal  text-gray-300">
                          Sun
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="">
                      <div className="cursor-pointer flex w-full justify-center">
                        <p className="text-[13px] font-sans text-black font-medium">
                          11
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="cursor-pointer flex w-full justify-center">
                        <p className="text-[13px] font-sans text-black font-medium">
                          12
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="cursor-pointer flex w-full justify-center">
                        <p className="text-[13px] font-sans text-black font-medium">
                          13
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="cursor-pointer flex w-full justify-center">
                        <p className="text-[13px] font-sans text-black font-medium">
                          14
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="cursor-pointer flex w-full justify-center">
                        <p className="text-[13px] font-sans text-black font-medium">
                          15
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="cursor-pointer flex w-full justify-center">
                        <p className="text-[13px] font-sans text-black font-medium">
                          16
                        </p>
                      </div>
                    </td>
                    <td className="">
                      <div className="cursor-pointer flex w-full justify-center">
                        <p className="text-[13px] font-sans text-black font-medium">
                          17
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
