import { Progress, Typography, Avatar, Button, Badge } from "antd";
import { CiSearch } from "react-icons/ci";
import { PiBellBold } from "react-icons/pi";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

const { Title, Text } = Typography;

const CustomHeader = () => {
  const [show] = useState(true);

  const url =
    "https://i.pinimg.com/236x/bf/57/02/bf57026ee75af2f414000cec322f7404.jpg";

  return (
    <div className="flex w-[80vw]">
      <div className="flex items-center h-[100px] w-[70%]">
        <div className="relative">
          <Progress
            size={60}
            type="circle"
            percent={25}
            strokeColor={"#6E62E5"}
            format={() => <Avatar size={50} src={url} />}
          />
          <div className="bg-[#6E62E5] w-[12px] rounded-[100%] text-[12px] text-white text-center absolute right-[4px] top-[4px]">
            3
          </div>
        </div>
        <div>
          <Title level={2}>Good Evening Team!</Title>
          <Text level={4} className="!text-[#A6ACB3]">
            Have an in-depth at all the metrics within your dashboard.
          </Text>
        </div>
      </div>

      <div className="flex items-center h-[100px] w-[50%]">
        <div className="flex items-center w-[50%] ">
          <Button
            className="ml-[40px] bg-[#F3F4F8]"
            shape="circle"
            icon={<CiSearch size={14} className="ml-[4px]" />}
          />
          <Badge className="ml-[40px]" dot={show} color="#6E62E5">
            <PiBellBold size={20} color="#a3a8b1" />
          </Badge>
        </div>

        <div className="flex items-center h-[100px] ml-[50px]">
          <Button
            className="py-[0] px-[4px] rounded-2xl"
            icon={<Avatar src={url} size={20} />}
          >
            Jhontosan
            <BiChevronDown
              size={18}
              className="relative top-[3px] ml-[12px] mr-[0] text-[#a3a8b1]"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
