// import { ChevronDown } from "lucide-react";
import React, { useContext, useState, useEffect, useRef, createContext } from 'react';
// import { createUseStyles } from "react-jss";

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

const Header = () => {
  return <label className="mt-4 mb-2 text-sm">Assign task to:</label>;
};

const Close = () => {
    const { setIsDropdownOpen } = useContext(UserAssignContext);
    return (
        <div
            className="absolute top-0 right-0 flex items-center justify-center -translate-y-full gap-2 bg-[#C0392B] px-2 py-1 rounded-t"
            onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(false);
            }}
        >
        <span>Close</span>
        <span>
            -
        </span>
        </div>
    );
};

const AssignedList = () => {
    const { assignedList, setAssignedList } = useContext(UserAssignContext);

    function handleRemove(id) {
        setAssignedList((assignedList) =>
            assignedList.filter((user) => user.id !== id)
        );
    }

    if (assignedList.length === 0)
        return (
        <p className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
            No users assigned to the task yet.
        </p>
        );

    return (
        <div className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
        <h2 className="px-2 my-3 font-bold">Assigned list:</h2>
        <div className="flex flex-wrap gap-4 ">
            {assignedList?.map((user, index) => (
                <div
                    key={user.id}
                    className="flex items-center gap-1 w-[47.5%] p-2 hover:bg-[#20212c] rounded transition-all duration-200"
                    onClick={() => handleRemove(user.id)}
                >
                <span>{index + 1}.</span>
                <img
                    className="w-6 h-6 "
                    src={user.imgUrl}
                    alt={`${user.name} image`}
                />

                <span>{user.name}</span>
                <span className="ml-auto cursor-pointer p-1 hover:bg-[#2b2c37] rounded-full">
                -
                </span>
            </div>
            ))}
        </div>
        </div>
    );
};

const Item = ({ user }) => {
    const { assignedList, setAssignedList } = useContext(UserAssignContext);

    function handleAssign(user) {
        setAssignedList((prevList) => {
            // Check if the user already exists in the list
            if (prevList.includes(user)) {
                // If user exists, remove it from the list
                const updatedList = prevList.filter((item) => item !== user);
                return updatedList;
            } else {
                // If user doesn't exist, add it to the list
                return [...prevList, user];
            }
        });
    }

    return (
        <li
            key={user.id}
            className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `}
            onClick={() => handleAssign(user)}
        >
        {assignedList.includes(user) && '+'}

        <img className="w-6 h-6 " src={user.imgUrl} alt={`${user.name} image`} />
        <span>{user.name}</span>
        </li>
    );
};

const Button = () => {
    const { setIsDropdownOpen } = useContext(UserAssignContext);
    return (
        <button
        className="  px-4 py-2 flex items-center justify-between w-full rounded border border-[#828FA340] hover:border-primary cursor-pointer relative "
        onClick={() => setIsDropdownOpen(true)}>
        <span className="block">
            -
        </span>

        <ListContainer />
        </button>
    );
};

const ListContainer = ({ listStyles }) => {
    const { users, isDropdownOpen } = useContext(UserAssignContext);

    return (
        isDropdownOpen && (
        <ul
            className={`absolute bottom-full translate-x-9  left-full translate-y-full rounded bg-[#20212c] w-max ${listStyles}`}>
            <Close />
            <div className="flex flex-col p-2">
              {users?.map((user, index) => (
                  <Item key={index} user={user} />
              ))}
            </div>
        </ul>
        )
    );
};


const UserAssignContext = createContext();
const UserAssignDropdown = ({
  children,
  assignedList,
  setAssignedList,
  users,
}) => {
  const UserAssignDropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useClickOutside(UserAssignDropdownRef, () => {
    setIsDropdownOpen(false);
  });

  return (
    <UserAssignContext.Provider
      value={{
        assignedList,
        users,
        UserAssignDropdownRef,
        isDropdownOpen,
        setIsDropdownOpen,
        setAssignedList,
      }}>
      <div ref={UserAssignDropdownRef}>{children}</div>
    </UserAssignContext.Provider>
  );
};

export default function App() {

  const [assignedList, setAssignedList] = useState([]);

  return (
    <div className="bg-[#2b2c37] h-[100dvh] text-white flex  p-20 gap-4 items-center flex-col">
      <div className=" w-[400px] ">
        <h1 className="text-2xl ">Compound Component Pattern</h1>
        <UserAssignDropdown
          assignedList={assignedList}
          setAssignedList={setAssignedList}
          users={usersArray}
        >
          <Header />
          <Button />
          <AssignedList />
        </UserAssignDropdown>
      </div>
    </div>
  );
}