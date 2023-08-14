import React from "react";
import { Space, Table, Tag } from "antd";
import {BsTrash3} from "react-icons/bs"
import {BsPencilSquare} from "react-icons/bs"
import {FaRegPenToSquare} from "react-icons/fa6"


interface DataType {
  key: string;
  name: string;
  phone: number;
  status: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const columns = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Telefone",
    dataIndex: "phone",
    key: "telefone",
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "falha") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Ação",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <FaRegPenToSquare/>
        <BsTrash3/>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    phone: 65999999999,
    status: ["andamento"],
  },
  {
    key: "2",
    name: "Jim Green",
    phone: 65999999999,

    status: ["falha"],
  },
  {
    key: "3",
    name: "Joe Black",
    phone: 65999999999,
    status: ["ativo"],
  },
];

const ModalNumCadastrado: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-3 rounded shadow-md z-10 w-[60%]">
        <div className="mb-4">{children}</div>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          onClick={onClose}
          aria-controls="drawer-navigation"
          className=" px-4 py-2 bg-gray-500 text-gray-950 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <section className="container px-4 mx-auto">
          <Table columns={columns} dataSource={data} />
        </section>
      </div>
    </div>
  );
};

export default ModalNumCadastrado;
