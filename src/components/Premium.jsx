import React from "react";
import Images from "./assets/Images";

import { Typography, Avatar } from "antd";
import { DownOutlined, ArrowRightOutlined } from "@ant-design/icons";
const { Text, Title } = Typography;

const Premium = () => {
  const people = [
    Images.av1,
    Images.av2,
    Images.av3,
    Images.av4,
    Images.av5,
    Images.av6,
    Images.av7,
    Images.av8,
    Images.av9,
    Images.av10,
    Images.av11,
    Images.av12,
    Images.av13,
  ];

  return (
    <div className="w-[100%] flex flex-col border-solid border-b-[#F4F6F9] border-x-0 border-t-0  my-[10px]">
      <div>
        <Text className="text-[#7667BD] text-[12px]" type="primary">
          Premium Access
        </Text>
      </div>
      <div className="my-[8px]">
        <Title level={3}>Take Back</Title>
        <Title level={3} className="">
          Your Creative
        </Title>
        <Title level={3} className="">
          Control
          <span className="ml-[5px]">
            <Avatar.Group
              maxCount={3}
              maxStyle={{
                color: "white",
                backgroundColor: "black",
              }}
            >
              {people.map((item) => (
                <Avatar size={30} shape="circle" src={item} />
              ))}
            </Avatar.Group>
          </span>
        </Title>
      </div>
      <div>
        <Text className="text-[#A29F9D]">
          <span className="mr-[12px] text-[12px]">
            The Professional Platform
          </span>{" "}
          <DownOutlined className="text-[12px]" />
        </Text>
      </div>
      <div className="flex justify-between items-center px-[12px] py-[10px] ml-[12px] text-[#7567C2] border-[1px] border-solid border-[#A29F9D] rounded-[10px] font-semibold my-[16px]">
        <Text className="text-[#9188c8] font-semibold " type="primary">
          Upgrade Now
        </Text>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Premium;
