import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
import { AiOutlineCloudUpload, AiOutlinePhone } from "react-icons/ai";

export default function Status() {
  return (
    <div className="flex items-center justify-evenly">
      <div className="flex flex-col items-center">
        <BiCheckCircle className="text-gray-800" />
        <span className="text-gray-800">Sucesso: 100</span>
      </div>
      <div className="p-1 flex flex-col items-center">
        <AiOutlineCloudUpload className="text-gray-800" />

        <span className="text-gray-800">Enviados:100</span>
      </div>
      <div className="p-1 flex flex-col items-center">
        <AiOutlinePhone className="text-gray-800" />
        <span className="text-gray-800">Total: 800</span>
      </div>
      <div className="p-1 flex flex-col items-center">
        <VscError className="text-gray-800" />
        <span className="text-gray-800">Falha: 0</span>
      </div>
    </div>
  );
}
