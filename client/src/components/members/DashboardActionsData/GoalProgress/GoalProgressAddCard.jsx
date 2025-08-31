import { ArrowLeft, Pencil, Plus, Trash } from "lucide-react";
import React, { useEffect } from "react";
import AddGoal from "./AddGoal";
import { useState } from "react";
import { Calendar, CircleCheckBig, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const GoalProgressAddCard = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Lose 10 lbs",
      description: "Reach target weight for better health and fitness",
      priority: "HIGH",
      dueDate: "2024-03-15",
      current: 7,
      target: 10,
      unit: "lbs",
    },
    {
      id: 2,
      title: "Bench Press 225 lbs",
      description: "Increase bench press strength for upper body development",
      priority: "MEDIUM",
      dueDate: "2024-04-01",
      current: 150,
      target: 225,
      unit: "lbs",
    },
  ]);

  const getPriorityColor = (priority) => {
    if (priority.toLowerCase() === "high") return "badge badge-error";
    if (priority.toLowerCase() === "medium") return "badge badge-warning";
    if (priority.toLowerCase() === "low") return "badge badge-neutral";

    return "text-blue-400";
  };

  const activeGoals = goals.length;
  const completedGoal = goals.filter((g) => g.current >= g.target).length;
  const avgProgress = goals.length
    ? (
        goals.reduce(
          (acc, item) => acc + (item.current / item.target) * 100,
          0
        ) / goals.length
      ).toFixed(2)
    : goals.length;
  const dueSoon = goals.filter(
    (g) => new Date(g.dueDate) < new Date("2024-04-01")
  ).length;

  // const status = [
  //   { icon: <Target />, label: "Active Goals", value: activeGoals },
  //   { icon: <CircleCheckBig />, label: "Completed", value: completedGoal },
  //   { icon: <TrendingUp />, label: "Avg Progress", value: `${avgProgress} %` },
  //   { icon: <Calendar />, label: "Due Soon", value: calDue },
  // ];

  // const avgProgress =
  //   goals.length === 0
  //     ? 0
  //     : (
  //         goals.reduce(
  //           (acc, item) => acc + (item.current / item.target) * 100)).toFixed(1);
  // console.log(avgProgress);

  const handleProgressChange = (id, value) => {
    setGoals((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, current: Number(value) } : item
      )
    );
  };

  const removeGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((item) => item.id !== id));
  };

  const backButtonHandler = () => {
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-50 lg:pt-9 pt-6 lg:px-20 px-2 min-h-screen overflow-y-auto">
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between"
      >
        <div className="flex items-center lg:gap-6 gap-4">
          <button
            onClick={backButtonHandler}
            type="button"
            className="hover:bg-[#39ff14] hover:bg-opacity-20 hover:text-black p-2 rounded-full transition-colors duration-300"
          >
            <ArrowLeft />
          </button>

          <div className="flex flex-col">
            <h1 className="lg:text-3xl text-xl font-bold">
              Goal <span className="bg-gradient-neon-green">Setting</span>
            </h1>
            <span className="text-sm text-gray-600">
              Set and track your fitness milestones
            </span>
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex gap-2 btn btn-md commonColorBg rounded-lg text-black"
        >
          <Plus /> New Goal
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 bg-gray-800 rounded-lg p-4"
        >
          <Target className="colour" />
          <p className="text-2xl font-bold">{goals.length}</p>
          <h3 className="text-md text-gray-400">Active Goals</h3>
        </motion.div>
        <motion.div
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 bg-gray-800 rounded-lg p-4"
        >
          <CircleCheckBig className="colorCyan" />
          <p className="text-2xl font-bold">{completedGoal}</p>
          <h3 className="text-md text-gray-400">Completed</h3>
        </motion.div>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 bg-gray-800 rounded-lg p-4"
        >
          <TrendingUp className="colour" />
          <p className="text-2xl font-bold">{avgProgress}%</p>
          <h3 className="text-md text-gray-400">Avg Progress</h3>
        </motion.div>
        <motion.div
          initial={{ x: -150 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-3 bg-gray-800 rounded-lg p-4"
        >
          <Calendar className="colorCyan" />
          <p className="text-2xl font-bold">{dueSoon}</p>
          <h3 className="text-md text-gray-400">Due Soon</h3>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-4 flex flex-col rounded-lg mt-7"
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">Your Goals</h1>
          <span className="text-sm text-gray-400">
            Track and manage your fitness objectives
          </span>
        </div>

        {goals.length === 0 ? (
          <div className="text-center text-gray-400">
            No goals yet. Add one!
          </div>
        ) : (
          goals.map((item) => {
            const progress = ((item.current / item.target) * 100).toFixed(1);
            console.log(progress);

            return (
              <motion.div
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className="flex flex-col mb-4 bg-gray-700 p-4 rounded-lg mt-2"
              >
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full commonColorBg items-center flex justify-center lg:text-2xl text-md text-black font-bold">
                      {item.title.charAt(0)}
                    </p>
                    <div className="flex flex-col">
                      <h1 className="font-bold">{item.title}</h1>
                      <p className="text-sm text-gray-300">
                        {item.description}
                      </p>
                      <div className="flex gap-4">
                        <p
                          className={`p-1 rounded-md text-sm ${getPriorityColor(
                            item.priority
                          )}`}
                        >
                          {item.priority}
                        </p>
                        <p className="text-sm text-gray-300">
                          due: {item.dueDate}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:gap-5 gap-1 items-center">
                    <button className="text-gray-300 cursor-pointer hover:bg-[#39ff14] p-1 hover:text-black hover:rounded-lg">
                      <Pencil className="text-sm" />
                    </button>
                    <button
                      onClick={() => removeGoal(goals.id)}
                      className="text-red-300 cursor-pointer hover:bg-[#39ff14] p-1 hover:text-black hover:rounded-lg"
                    >
                      <Trash className="text-sm" />
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <p>Progress</p>
                    <p>{progress}%</p>
                  </div>
                  <progress
                    className="progress progress-success"
                    value={progress}
                    max="100"
                  ></progress>
                  <div className="flex justify-between">
                    <p>
                      Current: {item.current} {item.unit}
                    </p>
                    <p className="colour">
                      Target: {item.target} {item.unit}
                    </p>
                  </div>
                </div>
                <div className="my-3">
                  <p className="flex gap-2 items-center ">
                    Update Progress:
                    <input
                      type="number"
                      className="input w-[100px]"
                      onChange={(e) =>
                        handleProgressChange(item.id, e.target.value)
                      }
                      value={item.current}
                      max={item.target}
                      min={1}
                    />
                    {item.unit}
                  </p>
                </div>
              </motion.div>
            );
          })
        )}
      </motion.div>
      {open && (
        <div className="">
          <AddGoal open={open} setOpen={setOpen} goals={goals} />
        </div>
      )}
    </div>
  );
};

export default GoalProgressAddCard;
