import React from "react";
import DefaultService from "./components/DefaultService";
import ComboCard from "./components/ComboCard";
import { Skeleton } from "Components/ui/skeleton";
import {
  getAllCombo,
  AscendingSort,
  DescendingSort,
} from "lib/api/services-api";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "Components/ui/select";

export default function Services() {
  const [comboCard, setComboCard] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [sortOder, setSortOder] = useState("system");
  useEffect(() => {
    if (sortOder === "asc") {
      AscendingSorts();
    } else if (sortOder === "des") {
      DescendingSortS();
    } else {
      getAllCombos();
    }
  }, [sortOder]);
  const getAllCombos = () => {
    getAllCombo()
      .then((data) => {
        setComboCard(data);
        console.log(data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const AscendingSorts = () => {
    AscendingSort()
      .then((data) => {
        setComboCard(data);
        console.log(data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const DescendingSortS = () => {
    DescendingSort()
      .then((data) => {
        setComboCard(data);
        console.log(data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <DefaultService />
      <div className="flex flex-col items-center mx-auto max-w-screen-lg m-10">
        <div className="mb-7 self-end">
          <Select onValueChange={setSortOder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="sắp xếp" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="system">mặc định</SelectItem>
              <SelectItem value="asc">tăng dần</SelectItem>
              <SelectItem value="des">giảm dần</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center flex-wrap space-x-7">
            {comboCard?.map((key, index) => (
              <ComboCard key={index} combo={key} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-wrap space-x-7">
            {comboCard?.map((key, index) => (
              <div key={index}>
                <Skeleton className="h-[125px] w-[300px] rounded-xl mb-5" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
