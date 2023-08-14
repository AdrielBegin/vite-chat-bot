import React from "react";


export default function TextArea() {
    return (
      <>
        <form>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-300 dark:border-gray-200">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-300">
              <textarea
                id="comment"
                className="w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-300 focus:ring-0 dark:text-white dark:placeholder-gray-800"
                placeholder="Escreva a mensagem"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 rounded-md dark:bg-gray-400">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Salvar
              </button>
              <div className="flex pl-0 space-x-1 sm:pl-2">
                <button
                  type="button"
                  className="inline-flex justify-center items-center p-2 text-gray-500 bg-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                    />
                  </svg>
                  <span className="sr-only">Escolher um arquivo</span>
                </button>
  
                <button
                  type="button"
                  className="inline-flex justify-center items-center p-2 text-gray-500 bg-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                  <span className="sr-only">Escolher uma imagem</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
  