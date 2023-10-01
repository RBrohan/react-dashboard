import { Layout } from "antd";
import SideMenu from "./components/SideMenu";
import CustomHeader from "./components/CustomHeader";
import Revenue from "./components/Revenue";
import SalesCard from "./components/SalesCard";
import Transactions from "./components/Transactions";
import Premium from "./components/Premium";
import Meeting from "./components/Meeting";
import Calendar from "./components/Calendar";

import "./App.css";

const { Sider } = Layout;
function App() {
  return (
    <div className="h-[100vh] w-[100%] flex">
      <div>
        <Layout className="!bg-white">
          <Sider className=" text-white">
            <SideMenu />
          </Sider>
        </Layout>
      </div>

      {/* right main div   */}
      <div className="w-[82%] flex flex-col pl-[20px]">
        {/* upper div */}
        <div className="">
          <CustomHeader />
        </div>

        {/* lower div */}
        <div className="w-[100%] flex">
          {/* left side children */}
          <div className="w-[65%]">
            <Revenue />

            <SalesCard />

            <Transactions />
          </div>

          {/* right side children*/}
          <div className="flex flex-col ml-[20px] w-[28%]">
            <div>
              <Premium />
            </div>

            <div className="h-[130px] w-[100%]">
              <Calendar />
            </div>

            <div className="h-[40%] mt-[10px]">
              <Meeting />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
