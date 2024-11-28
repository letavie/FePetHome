import { Button } from "Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "Components/ui/dialog";
import { CircleCheckBig } from "lucide-react";
import { toast } from "react-toastify";
import { completeOrder } from "lib/api/order-api";
import { useState, useContext } from "react";
import { DataContext } from "context/DataContext";
export function CompleteOrders({ orderId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getAllOrderS } = useContext(DataContext);
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await completeOrder(orderId);
      console.log("hehe", response);
      if (response.status === "success") {
        toast.success(`Confirm success: ${response.message}`, {
          position: "top-right",
        });
        setIsOpen(false);
        getAllOrderS();
      } else {
        toast.error(`Error: ${response.message}`, {
          position: "top-left",
        });
        setIsOpen(true);
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-left",
      });
      console.error("Error confirming cage:", error);
      setIsOpen(true);
    }
    setIsLoading(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center">
          <CircleCheckBig className="mr-2 h-4 w-4 text-green-600" />
          <span>Hoàn tất</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] font-mainText3 ">
        <DialogHeader>
          <DialogTitle className="text-green-500">
            Xác nhận Hoàn tất
          </DialogTitle>
          <DialogDescription>
            Bạn có chắc chắn xác nhận Hoàn tất ?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-900"
            type="submit"
          >
            {isLoading ? "Loading..." : "Xác nhận "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
