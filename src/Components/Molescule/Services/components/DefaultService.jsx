import React from "react";
import { motion } from "framer-motion";
import petCover from "assets/images/pet-cover.webp";

export default function DefaultService() {
  return (
    <div className="flex justify-center items-center flex-row space-x-4">
      <div>
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl text-[#222a63] font-bold"
        >
          PET SERVICE
        </motion.h1>
        <motion.h1
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl text-[#4c4c4c] font-bold "
        >
          COMBO-CHẤT LƯỢNG
        </motion.h1>
      </div>
      <div>
        <img
          src={petCover}
          alt="Pet Cover"
          className="w-[50vw] hidden md:block"
        />
      </div>
    </div>
  );
}
