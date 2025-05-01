import React from 'react';

function AssignedList({ assignedList, setAssignedList }) {
    function handleRemove(id) {
        setAssignedList((assignedList) =>
            assignedList.filter((user) => user.id !== id)
        );
    }
    
    return (
        assignedList.length === 0 ? (
            <p className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
                No users assigned to the task yet.
            </p>
        ) : (
            <div className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
            <h2 className="px-2 my-3 font-bold">Assigned list:</h2>
            <div className="flex flex-wrap gap-4 ">
                {assignedList?.map((user, index) => (
                <div
                    key={user.id}
                    className="flex items-center gap-1 w-[47.5%] p-2 hover:bg-[#20212c] rounded transition-all duration-200"
                >
                <span>{index + 1}.</span>
                <img
                    className="w-6 h-6 "
                    src={user.imgUrl}
                    alt={`${user.name} image`}
                />

                <span>{user.name}</span>
                <span 
                    className="ml-auto cursor-pointer p-1 hover:bg-[#2b2c37] rounded-full"
                    onClick={() => handleRemove(user.id)}
                >
                -
                </span>
                </div>
                ))}
            </div>
            </div> 
        )
    );
}


export default AssignedList;