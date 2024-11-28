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
import { Input } from "Components/ui/input";
import { Label } from "Components/ui/label";
import { X } from "lucide-react";
import { useState, useContext } from "react";
import { cancelOrder } from "lib/api/order-api";
import { toast } from "react-toastify";
import { DataContext } from "context/DataContext";
export function CancelOrder({ orderId }) {
  const [reason, setReason] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getAllOrderS } = useContext(DataContext);
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await cancelOrder(orderId, reason);
      if (response.status === "error") {
        toast.error(`Error: ${response.message}`, {
          position: "top-left",
        });
        setIsOpen(true);
      } else {
        toast.success(`Confirm success: ${response.message}`, {
          position: "top-right",
        });
        setIsOpen(false);
        getAllOrderS();
      }
      console.log(response);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-left",
      });
      setIsOpen(true);
      console.error("Error confirming cage:", error);
    }
    setIsLoading(false);
    console.log(" reason:", reason);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center">
          <X className="mr-2 h-4 w-4 text-red-600" />
          <span>Hủy</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-500">Lí do hủy</DialogTitle>
          <DialogDescription>Vui lòng nhập lí do hủy tại đây</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Lí do:
            </Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="bg-red-500 hover:bg-red-900"
            type="submit"
          >
            {isLoading ? "Loading..." : "Xác nhận hủy"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
