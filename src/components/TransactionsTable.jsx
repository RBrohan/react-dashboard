import { Table, Tag, Avatar, Badge } from "antd";

import Images from "./assets/Images";

const TransactionsTable = () => {
  const data = [
    {
      key: "1",
      customer: "Rohan",
      email: "xyz@gmail.com",
      status: "Success",
      date: "Nov 02, 2021",
      invoice: "$100.00",
      people: [
        Images.av1,
        Images.av2,
        Images.av3,
        Images.av4,
        Images.av5,
        Images.av6,
        Images.av7,
        Images.av8,
      ],
    },
    {
      key: "2",
      customer: "Anshv",
      email: "abc@gmail.com",
      status: "Pending",
      date: "Nov 02, 2021",
      invoice: "$100.00",
      people: [Images.av1, Images.av2, Images.av3],
    },
  ];

  const column = [
    {
      title: "Customer",
      dataIndex: "customer",
      key: "key",
      render: (customer, data) => {
        return (
          <div className="flex">
            <div className="w-[50px] h-[50px] rounded-[50%] bg-transparent flex justify-center items-center mr-[8px] ">
              <Badge className="border-red-300">
                <Avatar shape="circle" size={50} src={Images.av7} />
                <div>
                  <img
                    className="absolute w-[12px] h-[12px] bg-black rounded-full bottom-[5px] right-[5px]"
                    src={Images.shine}
                    alt=""
                  />
                </div>
              </Badge>
            </div>
            <div className="flex flex-col">
              <span>{customer}</span>
              <span className="text-[#A29F9D]">{data.email}</span>
            </div>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "key",
      render: (status) => {
        if (status === "Success") {
          return (
            <div>
              <Tag className="w-[90px] border-[1px] rounded-[15px] flex justify-center text-[14px] !bg-transparent">
                <div className="w-[9px] h-[9px] rounded-[50%] !bg-[#3DC764] mt-[6px] mr-[8px] "></div>
                <div>{status}</div>
              </Tag>
            </div>
          );
        }
        if (status === "Pending") {
          return (
            <div>
              <Tag className="w-[90px] border-[1px] rounded-[15px] flex justify-center text-[14px] !bg-transparent">
                <div className="w-[9px] h-[9px] rounded-[50%] !bg-[#F4AE44] mt-[6px] mr-[8px] "></div>
                <div>{status}</div>
              </Tag>
            </div>
          );
        }
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "key",
    },
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "key",
    },
    {
      title: "People",
      dataIndex: "people",
      key: "key",
      render: (people) => {
        if (people.length > 3) {
          return (
            <div>
              <Avatar.Group
                maxCount={2}
                maxStyle={{
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                {people.map((item) => (
                  <Avatar size={30} shape="circle" src={item} key={item.key} />
                ))}
              </Avatar.Group>
            </div>
          );
        }
        if (people.length <= 3) {
          return (
            <div>
              <Avatar.Group>
                {people.map((item) => (
                  <Avatar size={30} shape="circle" src={item} />
                ))}
              </Avatar.Group>
            </div>
          );
        }
      },
    },
  ];

  return <Table dataSource={data} columns={column} pagination={false} />;
};

export default TransactionsTable;
