import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "Components/ui/card";
import { Button } from "Components/ui/button";
export default function ComboCard({ combo }) {
  console.log(combo.image);
  return (
    <div className="">
      {combo.status === "In stock" ? (
        <>
          {" "}
          <Card className="w-[300px]">
            <CardHeader>
              {<img className="w-full mb-4 rounded-sm" src={combo.image}></img>}
              <CardTitle className=" text-center"> {combo.name}</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <p>
                  GIÁ : <b>{combo.price} vnđ</b>
                </p>
              </div>
            </CardContent>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <p>
                    TRẠNG THÁI: <b>Khả dụng</b>
                  </p>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link to={`/services/${combo._id}`}>
                <Button className="bg-[#222a63]">Detail</Button>
              </Link>
            </CardFooter>
          </Card>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
