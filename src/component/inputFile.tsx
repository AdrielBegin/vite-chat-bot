import React from "react";

export default function InputArquivo() {
    return (
      <form>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>        
            <input
                className="block w-full mb-5 p-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-800 focus:outline-none dark:bg-gray-300 dark:border-gray-200 dark:placeholder-gray-800"
                id="default_size"
                type="file"
            />
        </div>
      </form>
    );
  }