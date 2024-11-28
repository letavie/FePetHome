import React from "react";
import { Button } from "Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "Components/ui/dialog";
import { Input } from "Components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function DialogCancel({ isOpen, onClose, onSubmit }) {
  const formSchema = z.object({
    reason: z.string().min(1, {
      message: "không được bỏ trống",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const handleFormSubmit = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <DialogHeader>
            <DialogTitle>Lí do</DialogTitle>
            <DialogDescription>
              Vui lòng nhập lí do hủy đơn hàng
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-center items-center">
            <div className="m-4 w-[70%]">
              <Input
                id="reason"
                {...register("reason")}
                className="col-span-3"
              />
              {errors.reason && (
                <span className="text-red-600">{errors.reason.message}</span>
              )}
            </div>
            <DialogFooter>
              <Button className="bg-mainColer" type="submit">
                Lưu
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// export default DialogCancel;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// export function DialogCancel({ isOpen, onClose, onSubmit }) {
//   const formSchema = z.object({
//     reason: z.string().min(1, {
//       message: "không được bỏ trống",
//     }),
//   });

//   const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       reason: "",
//     },
//   });

//   const { register, handleSubmit, formState } = form;
//   const { errors } = formState;

//   const handleFormSubmit = (data) => {
//     onSubmit(data);
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
//       <div className="bg-white rounded-lg shadow-lg sm:max-w-[425px] w-full">
//         <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6">
//           <div className="mb-4">
//             <h2 className="text-xl font-semibold">Lí do</h2>
//             <p className="text-gray-600">Vui lòng nhập lí do hủy đơn hàng</p>
//           </div>
//           <div className="flex flex-col justify-center items-center">
//             <div className="m-4 w-[70%]">
//               <input
//                 id="reason"
//                 {...register("reason")}
//                 className="border border-gray-300 rounded p-2 w-full"
//               />
//               {errors.reason && (
//                 <span className="text-red-600">{errors.reason.message}</span>
//               )}
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 type="button"
//                 className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded"
//                 onClick={onClose}
//               >
//                 Hủy
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded"
//               >
//                 Lưu
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
