import { Button } from "Components/ui/button";
import { Truck } from "lucide-react";
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
import { inProgress } from "lib/api/cage-api";
import { toast } from "react-toastify";
import { DataContext } from "context/DataContext";

export function InTransit({ bookingId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { fetchBookingData } = useContext(DataContext);
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await inProgress(bookingId);
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
        fetchBookingData();
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
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center">
          <Truck className="mr-2 h-4 w-4 text-violet-600" />
          <span>Đang Tiến Hành</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-violet-500">Đang Tiến Hành</DialogTitle>
          <DialogDescription>
            Bạn chắc chắn muốn xác nhận Đang Tiến Hành ?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="bg-violet-500 hover:bg-violet-900"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Xác nhận "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
