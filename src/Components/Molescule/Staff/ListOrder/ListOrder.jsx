import { DataTableOrder } from "./components/Data-table-order";
import { useContext } from "react";
import Loading from "Components/ui/loading";
import { DataContext } from "context/DataContext";
export default function ListProduct() {
  const { order, loading } = useContext(DataContext);
  return (
    <div>
      <h1 className="font-bold font-mainText3 text-xl pb-4">
        Danh sách đơn hàng
      </h1>
      {loading ? <Loading /> : <DataTableOrder res={order} />}
    </div>
  );
}
