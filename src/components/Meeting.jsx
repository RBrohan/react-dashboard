import Images from "./assets/Images";
import { ClockCircleOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Meeting = () => {
  const data = [
    {
      key: "1",
      name: "Meeting with Client",
      meetIcon: <VideoCameraOutlined />,
      clockIcon: <ClockCircleOutlined />,
      para: "Google Meet",
      clockTime: "12 pm",
      imgSrc: Images.laptop,
    },
    {
      key: "2",
      name: "Weekly Report",
      meetIcon: <VideoCameraOutlined />,
      clockIcon: <ClockCircleOutlined />,
      para: "Google Meet",
      clockTime: "03 pm",
      imgSrc: Images.Book1,
    },
    {
      key: "3",
      name: "Daily Scrum Meeting",
      meetIcon: <VideoCameraOutlined />,
      clockIcon: <ClockCircleOutlined />,
      para: "Google Meet",
      clockTime: "05 pm",
      imgSrc: Images.Book2,
    },
  ];
  return (
    <div className="flex flex-col h-[90%]">
      {data.map((item) => (
        <div
          key={item.key}
          className="flex border-b-[0.5px] items-center justify-between border-solid border-b-[#F4F6F9] border-x-0 border-t-0 h-[40%] font-sans"
        >
          <div>
            <Avatar
              shape="circle"
              size={40}
              src={<img src={item.imgSrc} alt="img" />}
            />
          </div>
          <div className="pl-[12px] w-[100%]">
            <span className="text-[14px] font-semibold !mx-0">{item.name}</span>
            <div className="flex justify-between mt-[6px]">
              <div>
                <span className="text-[12px] font-semibold mr-[8px] text-[#A7A9A5]">
                  {item.meetIcon}
                </span>
                <span className="text-[12px] font-semibold text-[#A7A9A5]">
                  {item.para}
                </span>
              </div>
              <div>
                <span className="text-[12px] font-semibold mr-[8px] text-[#A7A9A5]">
                  {item.clockIcon}
                </span>
                <span className="text-[12px] font-semibold text-[#A7A9A5]">
                  {item.clockTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meeting;
