import React from "react";
import { useSelector, useDispatch } from "react-redux";
export const Card = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const DeleteUser = (id) => {
    dispatch({ type: "DeleteUser", id });
  };
  const EditUser = (id) => {
    const UserEdit = prompt("qwertyu");
    if (EditUser) {
      dispatch({ type: "EditUser", id, value: { userList: UserEdit } });
    }
  };
  return (
    <>
      <div className="container text-center mt-[30px]">
        {userList.map((item) => (
          <div
            className=" bg-blue-400 rounded-[10px] w-[400px] p-[20px] mx-auto mb-[20px]"
            key={item.id}
          >
            <h1 className="text-white mb-[10px] capitalize font-[600]">{item.userList}</h1>
            <div className="flex  justify-center gap-[10px]">
              <button
                onClick={() => DeleteUser(item.id)}
                className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span class="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Delete
              </button>
              <button
                onClick={() => EditUser(item.id)}
                className="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span class="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
