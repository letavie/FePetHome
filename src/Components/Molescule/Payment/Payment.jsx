import React from "react";
import { Modal, Box, Typography, Stack, LinearProgress } from "@mui/material";

const PaymentModal = ({ open, handleClose, bankDetails, totalPayment }) => {
  const { BANK_ID, ACCOUNT_NO, ACCOUNT_NAME } = bankDetails;
  const QR = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-compact2.jpg?amount=${totalPayment}&addInfo=<Thanh toán Pet Home>&accountName=<Pet Home>`;
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <div className="flex-wrap md:flex">
          <div className="mx-auto">
            <img className="mx-auto mt-12 h-70 w-72 rounded-lg border p-2 md:mt-0" src={QR} alt="step" />
            <div>
              <Typography variant="h5" component="h1" align="center">
                Pet Home
              </Typography>
              <Typography variant="body1" color="textSecondary" align="center">
                Số tiền : {totalPayment.toLocaleString()}
              </Typography>
            </div>
            <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
              <LinearProgress color="success" />
            </Stack>
            <div className="mx-auto w-52">
              <div className="m-4">
                <div className="flex w-full items-center justify-center">
                  <div className="flex h-14 w-full cursor-pointer flex-col">
                    <div className="mt-2 flex justify-between space-x-1">
                      <Typography variant="h8" color="textPrimary" align="center">
                        Đang chờ thanh toán
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
