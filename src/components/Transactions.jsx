import TransactionsHeader from "./TransactionsHeader";
import TransactionsTable from "./TransactionsTable";

const Transactions = () => {
  return (
    <div className="w-[100%] h-[370px] mt-[20px]">
      <TransactionsHeader />
      <TransactionsTable />
    </div>
  );
};

export default Transactions;
