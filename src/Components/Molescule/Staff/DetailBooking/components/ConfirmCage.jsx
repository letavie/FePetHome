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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "Components/ui/select";
import { Input } from "Components/ui/input";
import { Label } from "Components/ui/label";
import { CirclePlus } from "lucide-react";
import React, { useState, useEffect } from "react";
import { getEmptyCage, confirmCage } from "lib/api/cage-api";
import { toast } from "react-toastify";
export function ConfirmCage({ bookingId }) {
  const [emptyCage, setEmptyCage] = useState();
  const [selectedCageId, setSelectedCageId] = useState("");
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    const getAllEmptyCage = async () => {
      try {
        const data = await getEmptyCage(bookingId);
        setEmptyCage(data);
      } catch (error) {
        console.log("error get empty cage", error);
      }
    };
    getAllEmptyCage();
  }, []);
  const handleSaveChanges = async () => {
    setIsLoading(true);
    try {
      const response = await confirmCage(bookingId, selectedCageId);
      if (response.status === "error") {
        toast.error(`Error: ${response.message}`, {
          position: "top-left",
        });
      } else {
        toast.success(`Confirm success: ${response.message}`, {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-left",
      });
      console.error("Error confirming cage:", error);
    }
    setIsLoading(false);
  };
  return (
    <Dialog className="bg-mainColer" open={isLoading}>
      <DialogTrigger asChild>
        <button className="min-h-10 p-2 bg-textColer gap-1 hover:bg-blue-900 text-white flex items-center rounded-md">
          <p> Chọn lồng</p>
          <CirclePlus />
        </button>
        {/* <Button variant="outline">Edit Profile</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-mainText3">
        <DialogHeader>
          <DialogTitle className="text-textColer ">Lựa chọn lồng</DialogTitle>
          <DialogDescription>
            Vui lòng chọn các lồng rỗng dưới đây cho thú cưng
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Lưa chọn
            </Label>
            <Select onValueChange={(value) => setSelectedCageId(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="lựa chọn" />
              </SelectTrigger>
              {emptyCage && emptyCage.length >= 1 ? (
                <>
                  <SelectContent>
                    {emptyCage.map((res, index) => (
                      <SelectItem key={index} value={res._id}>
                        {res.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </>
              ) : (
                <SelectContent>
                  <SelectItem>không có lồng</SelectItem>
                </SelectContent>
              )}
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className=" min-w-28 bg-textColer "
            onClick={handleSaveChanges}
          >
            {isLoading ? "Loading..." : "Lưu thay đổi"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
