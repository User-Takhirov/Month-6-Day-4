import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
export const Form = () => {
  const { handleSubmit, reset, register } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch({ type: "AddUser", value: { id: nanoid(), ...data } });
    reset();
  };
  return (
    <>
      <div className="container">
        <form
          className="text-center mt-[100px] flex items-center justify-center gap-[10px]"
          onSubmit={handleSubmit(submit)}
        >
          <div>
            <input
              className="py-[10px] bg-cyan-400 px-[5px] outline-none capitalize rounded-[5px] text-white"
              {...register("userList")}
              type="text"
            />
          </div>
          <div>
            <button className="bg-green-400 p-[10px] text-white rounded-[5px] ">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
