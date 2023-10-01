import React from "react";
import { Typography, Dropdown, Space, Button, Menu } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { BiChevronDown } from "react-icons/bi";
const { Title } = Typography;

const TransactionsHeader = () => {
  const recipient = (
    <Menu className="text-[8px]">
      <Menu.Item key="1">Recipient 1</Menu.Item>
      <Menu.Item key="2">Recipient 2</Menu.Item>
    </Menu>
  );
  const amount = (
    <Menu>
      <Menu.Item key="1">Amount 1</Menu.Item>
      <Menu.Item key="2">Amount 2</Menu.Item>
    </Menu>
  );
  const status = (
    <Menu>
      <Menu.Item key="1">Status 1</Menu.Item>
      <Menu.Item className="text-[12px]" key="2">
        Status 2
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="w-[100%]">
      <div className="flex justify-between">
        <div>
          <div className="flex justify-start">
            <Title level={4} className="!mx-[0px]">
              Transaction History
            </Title>
          </div>

          <div className="my-[10px] ml-[18px]">
            <Space size={10} wrap>
              <Dropdown className="bg-[#f3f4f8]" overlay={recipient}>
                <Button>
                  Recipient{" "}
                  <BiChevronDown
                    size={18}
                    className="relative top-[3px] ml-[12px] mr-[0] text-[#a3a8b1]"
                  />
                </Button>
              </Dropdown>
              <Dropdown className="bg-[#f3f4f8]" overlay={amount}>
                <Button>
                  Amount{" "}
                  <BiChevronDown
                    size={18}
                    className="relative top-[3px] ml-[12px] mr-[0] text-[#a3a8b1]"
                  />
                </Button>
              </Dropdown>
              <Dropdown className="bg-[#f3f4f8]" overlay={status}>
                <Button>
                  Status
                  <BiChevronDown
                    size={18}
                    className="relative top-[3px] ml-[6px] mr-[0] text-[#a3a8b1]"
                  />
                </Button>
              </Dropdown>
            </Space>
          </div>
        </div>
        <div>
          <Dropdown className="bg-transparent" overlay={status}>
            <Button>
              <CalendarOutlined className="text-[12px]" />
              <span className="text-[12px]">Month</span>
              <BiChevronDown className="text-[12px] " />
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default TransactionsHeader;
