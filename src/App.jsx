// import { ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef  } from 'react';
import { createUseStyles } from "react-jss";
import Dropdown from './DropDown';
import AssignedList from './AssignedList';

const useStyles = createUseStyles({
  contentContainer: {
    color: "1px solid red"
  }
});

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [assignedList, setAssignedList] = useState([]);

  const dropdownContainerRef = useRef(null);
  
  const classes = useStyles();
  
  const useClickOutside = (ref, handler) => {
    // console.log(handler, ref);
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
  
        handler(event);
      };
  
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  };

  useClickOutside(dropdownContainerRef, () => {
    setIsDropdownOpen(false);
  });

  return (
      <div className="bg-[#2b2c37] h-[100dvh] text-white flex  p-20 gap-4 items-center flex-col">
        <div className=" w-[400px] " ref={dropdownContainerRef}>
            <h1 className="text-2xl ">My React Dropdown </h1>
            <Dropdown
              usersArray={usersArray}
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
              assignedList={assignedList}
              setAssignedList={setAssignedList}
            />
            <AssignedList
              assignedList={assignedList}
              setAssignedList={setAssignedList}
            />
        </div>
      </div>
  );
}
  