import React, { useState } from "react";
import Status from "./status";
import { AiOutlineEye } from "react-icons/ai";
import ModalNumCadastrado from "./modalListNumCad";
import InputIserirNumero from "./inputInsertNum";
import InputArquivo from "./inputFile";
import TextArea from "./textArea";

export default function Cards() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="w-full items-center p-4 bg-white border  border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-100 dark:border-gray-300">
      <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-gray-800 text-center">
          NOVO ATENDIMENTO
        </h5>
        <div>
          <label className="block mb-2 text-center text-sm font-medium text-gray-900 dark:text-gray-800">
            Status
          </label>
          <Status />
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">
              Anexar número
            </label>
            <InputArquivo />
            <div className=" flex items-center">
              <div className="flex flex-col w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">
                  Cadastrar número
                </label>
                <div className="w-full">
                  <InputIserirNumero />
                </div>
              </div>
              <button
                className=" text-white px-1 py-1 rounded mt-4 focus:outline-none"
                onClick={openModal}
              >
                <AiOutlineEye className="text-gray-800 w-full" />
                <i className="text-gray-800">Visualizar</i>
              </button>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800">
              Mensagem Pricipal
            </label>
            <TextArea />
            <div className="flex items-center h-5"></div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="p-1">
            <button
              type="submit"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Iniciar
            </button>
          </div>
          <div>
            <button
              type="submit"
              className=" focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
            >
              Pausar
            </button>
          </div>
        </div>
      </form>
      {/* <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 focus:outline-none"
          onClick={openModal}
        >
          Abrir Modal
        </button> */}
      <ModalNumCadastrado isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}
