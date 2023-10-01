import { Typography } from "antd";
import { BiSolidUpArrow } from "react-icons/bi";
import AnalyticChart from "./AnalyticChart";

const { Title, Text } = Typography;

const SalesCard = () => {
  return (
    <div className="border-[0.5px] border-slate-400 border-solid flex w-[100%] h-[23%] mt-[20px] rounded-lg">
      <div className="flex flex-col content-between h-[50%] w-[40%] py-[10px] ">
        <div>
          <Title level={4}>Total Sales and Cost</Title>
          <Text className="text-[#A6ACB3] ">Last 60 Days</Text>
        </div>

        <div className="mt-[20px]">
          <div className="flex items-center mr-[20px]">
            <Title level={2} className="!text-[#6E62E5] my-0 ml-0">
              $956.82k
            </Title>
            <div>
              <span className="bg-[#C3F9D9] text-[#3DC764] ml-[8px] rounded-2xl px-[4px]">
                <BiSolidUpArrow size={10} color="#3DC764" /> +5.4%
              </span>
            </div>
          </div>
          <div className="text-[#3DC764] ml-[16px]">
            +8.2k
            <span className="text-[#A6ACB3] "> vs prev. 60 days</span>
          </div>
        </div>
      </div>

      <div className="w-[60%] h-[20%]">
        <AnalyticChart />
      </div>
    </div>
  );
};

export default SalesCard;
