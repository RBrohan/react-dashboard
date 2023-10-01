import { Avatar } from "antd";

const Revenue = () => {
  const ProfitCard = [
    {
      id: "revenue",
      name: "Monthly Revenue",
      icon: (
        <Avatar
          src="https://img.freepik.com/premium-vector/money-bag-filled-with-dollars-gold-coin-cartoon-vector-illustration_401949-7.jpg?w=2000"
          size={35}
        />
      ),
      amount: "$3.500",
      profit: "+2.4%",
      previousMonth: "Previous month",
      profitPreviousMonth: "$1.7k",
    },
    {
      id: "sales",
      name: "Monthly Sales",
      icon: (
        <Avatar
          src="https://img.freepik.com/premium-vector/money-cartoon-vector-illustration-flying-dollar-flat-icon-outline_385450-1305.jpg?w=2000"
          size={35}
        />
      ),
      amount: "$6.750",
      profit: "+1.4%",
      previousMonth: "Previous month",
      profitPreviousMonth: "$3.1k",
    },
    {
      id: "profit",
      name: "Total Profit",
      icon: (
        <Avatar
          src="https://img.freepik.com/premium-vector/hand-putting-coin-pink-piggy-bank-money-savings-concept_339032-1780.jpg"
          size={35}
        />
      ),
      amount: "$10.900",
      profit: "+4.3%",
      previousMonth: "Previous year",
      profitPreviousMonth: "$8.9k",
    },
  ];

  return (
    <div className="flex w-[100%] h-[20%] bg-[#6E62E5] rounded-lg my-[10px]">
      {ProfitCard.map((profit) => (
        <div key={profit.id} className="flex content-center w-[40%] px-[10px]">
          <div className="flex items-center ml-[5px]">
            <div className="">{profit.icon}</div>
            <div className="ml-[10px]">
              <div className="text-[#B8B3F2]">{profit.name}</div>
              <div className="text-white font-[12px] my-[8px] text-lg">
                {profit.amount}
                <span className=" text-[#756AE6] bg-white rounded-2xl px-[6px] ml-[6px] text-sm">
                  {profit.profit}
                </span>
              </div>
              <div className="text-[#B8B3F2]">
                {profit.previousMonth}
                <span className="text-white ml-[4px]">
                  {profit.profitPreviousMonth}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Revenue;
