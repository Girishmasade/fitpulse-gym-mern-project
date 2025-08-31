import { Save } from "lucide-react";
import React, { useState } from "react";

const AddGoal = ({ open, setOpen, goals }) => {
  if (!open) return null;

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
    current: 0,
    target: 0,
    unit: "",
  });

  return (
    <div className="modal modal-open ">
      <div className="modal-box bg-base-200 ">
        <button
          onClick={() => setOpen(false)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <div className="flex flex-col">
          <h2 className="font-bold text-lg colour">Create New Goal</h2>
          <span className="text-gray-500 text-sm">
            Set a new fitness target to work towards
          </span>
        </div>

        <form className="my-5 flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Goal Title *</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-success w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Description</label>
            <textarea
              placeholder="Type here"
              className="textarea input input-success w-full"
            />
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="">Category *</label>
              <select
                defaultValue="Select Category"
                className="select select-success "
              >
                <option>Weight Loss</option>
                <option>Weight Gain</option>
                <option>Strength Training</option>
                <option>General Fitness</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="">Priority</label>
               <select
                defaultValue="Select you're priority"
                className="select select-success"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Target Value *</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-success w-full"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Current Value</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-success w-full"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Unit</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-success w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Target Date *</label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-success w-full"
            />
          </div>
        </form>

        <div className="modal-action">
          <button className="btn btn-error" onClick={() => setOpen(false)}>
            Close
          </button>
           <button className="btn btn-success flex gap-5" onClick={() => setOpen(false)}>
           <Save/> Create Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGoal;
