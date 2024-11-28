import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import styles from "./OrderHistoryService.module.scss";
import MyAxios from "setup/configAxios";
import petCover from "../../../assets/images/pet-cover.webp";
import { motion } from "framer-motion";
import MoreiconHisotyService from "./components/moreicoin";
import { Input } from "Components/ui/input";
import { toast } from "react-toastify";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "Components/Atom/Modal/Modal";
const OrderHistoryService = () => {
  const [rows, setRows] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [deleteShow, setDeleteShow] = useState(false);
  const [render, setRender] = useState(false);
  const [reason, setReason] = useState("");
  const dataGridStyle = {
    fontSize: "10px", // Thay đổi kích thước font ở đây
  };
  const handleDeleteShow = (id) => {
    setSelectedServiceId(id);
    setDeleteShow(true);
  };
  const handleDeleteClose = () => {
    setDeleteShow(false);
  };
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    //goi api
    MyAxios.post(`api/v1/service/serviceHistory`, {
      userId: userId,
    }).then((res) => {
      setRows(res.data);
    });
  }, [render]);

  const handleDelete = async () => {
    try {
      const data = await MyAxios.post(
        `http://localhost:5000/api/v1/service/cancel`,
        {
          serviceRecordId: selectedServiceId,
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
        setSelectedServiceId(null);
        setDeleteShow(false);
      }
    } catch (error) {
      console.error("There was an error deleting the data!", error);
    }
  };

  console.log("rowewww", rows);

  const columns = [
    {
      field: "bookingid",
      headerName: "ID đặt chổ",
      width: 250,
      renderCell: (params) => {
        return (
          <div className={styles["id"]}>{params.row.serviceRecord._id}</div>
        );
      },
    },
    {
      field: "name",
      headerName: "Tên thú cưng",
      width: 120,
      renderCell: (params) => {
        return <div className={styles["id"]}>{params.row.petName}</div>;
      },
    },

    {
      field: "nameservice",
      headerName: "Tên dịch vụ",
      width: 400,
      renderCell: (params) => {
        return (
          <div className={styles["id"]}>
            {params.row.serviceRecord.product.name}
          </div>
        );
      },
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 200,
      renderCell: (params) => {
        const statusText =
          params.row.serviceRecord.status === "Processing"
            ? "Đang xử lí"
            : params.row.serviceRecord.status === "Processed"
            ? "Đã xử lý"
            : params.row.serviceRecord.status === "Cancelled"
            ? "Đã hủy"
            : params.row.serviceRecord.status === "Completed"
            ? "Hoàn thành"
            : params.row.serviceRecord.status === "In Progress"
            ? "Đang tiến hành"
            : params.row.serviceRecord.status;
        const statusClass =
          params.row.serviceRecord.status === "Processing"
            ? "text-yellow-400 "
            : params.row.serviceRecord.status === "Processed"
            ? "text-cyan-400"
            : params.row.serviceRecord.status === "Cancelled"
            ? "text-red-500"
            : params.row.serviceRecord.status === "Completed"
            ? "text-green-500"
            : params.row.serviceRecord.status === "In Progress"
            ? "text-violet-500"
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
            {params.row.serviceRecord.status === "Processing" ? (
              <MoreiconHisotyService
                handleDelete={() =>
                  handleDeleteShow(params.row.serviceRecord._id)
                }
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
            getRowId={(row) => row.serviceRecord._id} // Specify the custom id field
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
          <ModalBody>Bạn có chắc chắn muốn Hủy dịch vụ này không?</ModalBody>
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

export default OrderHistoryService;
