// import { ChevronDown } from "lucide-react";

// import { FiCheck, FiChevronDown } from "react-icons/fi";

const usersArray = [
  {
    name: "Miguel",
    imgUrl: "/assets/user-1.svg",
    id: "M1",
  },
  {
    name: "Jane",
    imgUrl: "/assets/user-2.svg",
    id: "J2",
  },
  {
    name: "Paul",
    imgUrl: "/assets/user-3.svg",
    id: "P3",
  },
  {
    name: "Abbey",
    imgUrl: "/assets/user-4.svg",
    id: "A4",
  },
  {
    name: "Chad",
    imgUrl: "/assets/user-5.svg",
    id: "C5",
  },
  {
    name: "Fiona",
    imgUrl: "/assets/user-6.svg",
    id: "F6",
  },
  {
    name: "Andreas",
    imgUrl: "/assets/user-7.svg",
    id: "A7",
  },
  {
    name: "Jane",
    imgUrl: "/assets/user-8.svg",
    id: "J8",
  },
];

export default function App() {
  return (
    <div className="bg-[#2b2c37] h-[100dvh] text-white flex  p-20 gap-4 items-center flex-col">
      <div className=" w-[400px] ">
        <h1 className="text-2xl ">My React Dropdown </h1>
      </div>
    </div>
  );
}
