import { Menu } from "antd";
import { BiHomeAlt2, BiShoppingBag, BiFolder } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { TbSettings2 } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import Images from "./assets/Images";

const SideMenu = () => {
  return (
    <>
      <div className="flex items-center ">
        <img className="w-[60px] ml-[12px]" src={Images.oicon} alt="oicon" />
        <h3 className="text-black text-[24px] ml-[-10px]">Omoi</h3>
      </div>
      <Menu
        className="text-black"
        items={[
          {
            label: <span>Home</span>,
            key: "home",
            icon: <BiHomeAlt2 className="ml-[12px]" />,
          },
          {
            label: "Analytic",
            key: "analytic",
            icon: <TbBrandGoogleAnalytics className="ml-[12px]" />,
          },
          {
            label: "Explore",
            key: "explore",
            icon: <MdOutlineExplore className="ml-[12px]" />,
          },
          {
            label: "Shop",
            key: "shop",
            icon: <BiShoppingBag className="ml-[12px]" />,
          },
          {
            label: "Inbox",
            key: "inbox",
            icon: <AiOutlineMessage className="ml-[12px]" />,
          },
          {
            label: "Tools",
            key: "tools",
            type: "group",
            children: [
              {
                label: "Setting",
                key: "setting",
                icon: <TbSettings2 />,
              },
              {
                label: "Help",
                key: "help",
                icon: <FiHelpCircle />,
              },
            ],
          },
          {
            label: "Projects",
            key: "projects",
            type: "group",
            children: [
              {
                label: "Amazon",
                icon: <BiFolder />,
              },
              {
                label: "Infinity HQ",
                icon: <BiFolder />,
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default SideMenu;
