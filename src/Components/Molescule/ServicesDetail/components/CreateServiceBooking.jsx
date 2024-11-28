import React, { useState, useEffect } from "react";
import { Button } from "Components/ui/button";
import { PawPrint, CalendarDays } from "lucide-react";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "Components/ui/select";
import { Label } from "Components/ui/label";
import { getAllPet, CreateServiceBooking } from "lib/api/services-api";
import { toast } from "react-toastify";
import DateTimePicker from "./DateTimePicker";

export function CreateServiceBookings({ productId }) {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [timeStartService, setTimeStartService] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getAllPets = async () => {
      const userId = localStorage.getItem("userId");
      try {
        const data = await getAllPet(userId);
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };
    getAllPets();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await CreateServiceBooking(
        selectedPet,
        timeStartService,
        productId
      );

      if (response.response.status === "error") {
        toast.error(`Error: ${response.response.message}`, {
          position: "top-left",
        });
        setIsOpen(true);
      } else {
        toast.success(`Confirm success: ${response.response.message}`, {
          position: "top-right",
        });
        setIsOpen(false);
      }
    } catch (error) {
      toast.error(`Error: ${error.response.message}`, {
        position: "top-left",
      });
      setIsOpen(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="text-white bg-blue-900 rounded-2xl px-10 mt-3">
          Tạo dịch vụ
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#1e3a8a]">
            Tạo đặt chỗ dịch vụ
          </DialogTitle>
          <DialogDescription>
            Vui lòng chọn thú cưng và thời gian bắt đầu
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 w-[100%]">
          <div className="grid grid-cols-6 items-center gap-4">
            <Label className="text-right grid-cols-2 text-[#1e3a8a]">
              <PawPrint />
            </Label>
            <Select onValueChange={setSelectedPet}>
              <SelectTrigger className="w-[100%] h-10 col-span-4 border-[#1e3a8a]">
                <SelectValue placeholder="Chọn thú cưng" />
              </SelectTrigger>
              <SelectContent>
                {pets.map((pet) => (
                  <SelectItem key={pet._id} value={pet._id}>
                    {pet.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-6 items-center gap-4 pt-4">
            <Label className="text-right grid-cols-2 text-[#1e3a8a]">
              <CalendarDays />
            </Label>
            <div className="w-[100%] col-span-4 ">
              <DateTimePicker onDateTimeChange={setTimeStartService} />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="bg-[#1e3a8a] hover:bg-[#0d1b44]"
            type="submit"
          >
            Xác nhận
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
