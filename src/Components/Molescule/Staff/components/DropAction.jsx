import { CheckCheck, MoreHorizontal, X, SquareCheckBig } from "lucide-react";
import { Button } from "Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "Components/ui/dropdown-menu";
import { useState } from "react";
import { DialogCancel } from "./DialogCancel";

export function DropAction({ onConfirm, onCancel, status, orderId }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCancel = (data) => {
    onCancel(data);
    setIsDialogOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-1">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-46" align="start">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            {status === "Processing" ? (
              <>
                <DropdownMenuItem onClick={onConfirm}>
                  <CheckCheck className="mr-2 h-4 w-4 text-green-600" />
                  <span>Xác nhận</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsDialogOpen(true)}>
                  <X className="mr-2 h-4 w-4 text-red-600" />
                  <span>Hủy</span>
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem>
                <SquareCheckBig className="mr-2 h-4 w-4 text-green-600" />
                <span>Hoàn thành</span>
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogCancel
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onSubmit={(data) => handleCancel({ orderId, reason: data.reason })}
      />
    </>
  );
}
