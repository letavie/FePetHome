import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import styles from "./OrderHistory.module.scss";
import MyAxios from "setup/configAxios";
import petCover from "../../../assets/images/pet-cover.webp";
import { motion } from "framer-motion";
import MoreiconHisoty from "./components/moreicoin";
import { Input } from "Components/ui/input";
import { toast } from "react-toastify";

import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "Components/Atom/Modal/Modal";
const OrderHistory = () => {
  const [rows, setRows] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);
  const [render, setRender] = useState(false);
  const [reason, setReason] = useState("");
  const dataGridStyle = {
    fontSize: "10px", // Thay đổi kích thước font ở đây
  };
  const handleDeleteShow = (id) => {
    setSelectedProductId(id);
    setDeleteShow(true);
  };
  const handleDeleteClose = () => {
    setDeleteShow(false);
  };
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    //goi api
    MyAxios.get(
      `http://localhost:5000/api/v1/orders/history?userId=${userId}`
    ).then((res) => {
      setRows(res.data);
    });
  }, [render]);
  console.log(rows);

  const handleDelete = async () => {
    try {
      const data = await MyAxios.post(
        `http://localhost:5000/api/v1/orders/cancel`,
        {
          orderId: selectedProductId,
          reason: reason,
        }
      );
      if (data.status === "error") {
        toast.error(`Error: ${data.message}`, {
          position: "top-left",
        });
      } else {
        toast.success(`Confirm success: ${data.message}`, {
          position: "top-right",
        });
        setRender(!render);
        setSelectedProductId(null);
        setDeleteShow(false);
      }
    } catch (error) {
      console.error("There was an error deleting the data!", error);
    }
  };
  const columns = [
    {
      field: "_id",
      headerName: "ID đặt hàng",
      width: 120,
      renderCell: (params) => {
        return <div className={styles["id"]}>{params.row._id}</div>;
      },
    },
    {
      field: "order_info",
      headerName: "Thông tin đặt hàng",
      width: 500,
      renderCell: (params) => {
        return (
          <div className={styles["order-info"]}>
            {params.row.orderDetails.map((detail) => (
              <span key={detail.product._id}>
                {detail.product.name} x{detail.quantity} ,
              </span>
            ))}
          </div>
        );
      },
    },
    {
      field: "orderdate",
      headerName: "Ngày",
      width: 120,
      renderCell: (params) => {
        return <div className={styles["date"]}>{params.row.dateOrder}</div>;
      },
    },
    {
      field: "shipping",
      headerName: "Địa chỉ giao hàng",
      width: 500,
      renderCell: (params) => {
        return (
          <div className={styles["address"]}>
            <span>{params.row.shipping.addressShipping.street}</span> ,
            <span>{params.row.shipping.addressShipping.district}</span> ,
            <span>{params.row.shipping.addressShipping.city}</span>
          </div>
        );
      },
    },
    {
      field: "totalPrice",
      headerName: "Tổng",
      width: 120,
      renderCell: (params) => {
        return (
          <div className={styles["total-price"]}>{params.row.totalPrice}</div>
        );
      },
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 100,
      renderCell: (params) => {
        const statusText =
          params.row.status === "Processing"
            ? "Đang xử lí"
            : params.row.status === "Processed"
            ? "Đã xử lý"
            : params.row.status === "Cancelled"
            ? "Đã hủy"
            : params.row.status === "Completed"
            ? "Hoàn thành"
            : params.row.status === "In Transit"
            ? "Đang vận chuyển"
            : params.row.status;
        const statusClass =
          params.row.status === "Processing"
            ? "text-yellow-400"
            : params.row.status === "In Transit"
            ? "text-violet-400"
            : params.row.status === "Completed"
            ? "text-green-400"
            : params.row.status === "Cancelled"
            ? "text-red-400"
            : "";
        return (
          <div
            className={`capitalize font-bold font-mainText3 ${statusClass} `}
          >
            {statusText}
          </div>
        );
      },
    },

    {
      field: "",
      headerName: "Hành động",
      width: 80,
      renderCell: (params) => {
        return (
          <>
            {params.row.status === "Processing" ? (
              <MoreiconHisoty
                handleDelete={() => handleDeleteShow(params.row._id)}
              />
            ) : (
              ""
            )}
          </>
        );
      },
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center flex-row space-x-4">
        <div>
          <motion.h1
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl text-[#222a63] font-bold"
          >
            PET HOME
          </motion.h1>
          <motion.h1
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl text-[#4c4c4c] font-bold"
          >
            Đơn hàng
          </motion.h1>
        </div>
        <div>
          <img
            src={petCover}
            alt="Pet Cover"
            className="w-[50vw] hidden md:block"
          />
        </div>
      </div>
      <div className={styles["data"]}>
        <div className={styles["data-grid-container"]}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row._id} // Specify the custom id field
            style={{ fontSize: "0.9rem" }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15]}
            checkboxSelection
            rowHeight={70}
          />
        </div>
      </div>

      <Modal show={deleteShow} onHide={handleDeleteClose} size={"sm"}>
        <ModalHeader content={"Xác nhận Hủy"} />
        <div className="m-5">
          <ModalBody>Bạn có chắc chắn muốn Hủy sản phẩm này không?</ModalBody>
          <Input
            className="placeholder-gray-500 border mb-2"
            placeholder="Nhập lí do hủy"
            onChange={(e) => setReason(e.target.value)}
          />
          <ModalFooter>
            <div className="flex justify-end items-center">
              <button
                className="bg-slate-700 p-2 text-white rounded-sm m-1"
                onClick={handleDelete}
              >
                xác nhận
              </button>

              <button
                className="bg-red-700 p-2 text-white rounded-sm m-1"
                onClick={handleDeleteClose}
              >
                Hủy
              </button>
            </div>
          </ModalFooter>
        </div>
      </Modal>
    </div>
  );
};

export default OrderHistory;
