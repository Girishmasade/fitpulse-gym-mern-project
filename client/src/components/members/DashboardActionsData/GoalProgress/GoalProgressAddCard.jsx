import React, { useEffect,  } from 'react'

const GoalProgressAddCard = ({open, setOpen}) => {
    if (!open) return null;
     ;
  return (
    <dialog open={open} className="modal" onClose={() => setOpen(false)}>
      <div className="modal-box">
        
        <div method="dialog" className="absolute right-2 top-2">
          <button
            className="btn btn-sm btn-circle btn-ghost"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        <h3 className="font-bold text-lg">Add New Goal</h3>
        <p className="py-2 text-sm text-gray-500">
          Fill out the details below to add a new goal.
        </p>

        {/* Example form fields */}
        <div className="space-y-3 mt-4">
          <input
            type="text"
            placeholder="Goal Title"
            className="input input-bordered w-full"
          />
          <input
            type="number"
            placeholder="Target Value"
            className="input input-bordered w-full"
          />
          <input
            type="date"
            placeholder="Due Date"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary w-full">Save Goal</button>
        </div>
      </div>
    </dialog>
  )
}

export default GoalProgressAddCard
