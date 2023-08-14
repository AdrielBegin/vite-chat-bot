import React from "react";

export default function InputIserirNumero() {
  return (
    <form>
      <div className="relative">
        <div className="flex w-full">
          <div className="p-1">
            <input
              type="text"
              id="default-search"
              className="lg:w-[37rem] md:w-32 p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nome"
            />
          </div>
          <div className="p-1">
            <input
              type="text"
              id="default-search"
              className="lg:w-[37rem] md:w-32 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-300 dark:placeholder-gray-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="65 9 9999-9999"
            />
          </div>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
}
