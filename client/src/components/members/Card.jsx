import { Flame, Dumbbell, Award, Clock } from "lucide-react";

const Card = () => {
      const stats = [
    { title: "Workouts This Week", value: "5/6", icon: <Dumbbell className="w-6 h-6" />, progress: (5/6)*100 },
    { title: "Calories Burned", value: "2,340/2,500", icon: <Flame className="w-6 h-6" />, progress: (2340/2500)*100 },
    { title: "Personal Bests", value: "3/5", icon: <Award className="w-6 h-6" />, progress: (3/5)*100 },
    { title: "Hours Trained", value: "7.5/8", icon: <Clock className="w-6 h-6" />, progress: (7.5/8)*100 },
  ];
  return (
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {stats.map((stat, i) => (
        <div key={i} className="card bg-base-300 p-4 shadow-lg rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-400">{stat.title}</h2>
            <div className="p-2 rounded-full commonColorBg text-black">
              {stat.icon}
            </div>
          </div>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
          <progress 
            className="progress progress-success w-full mt-3 colour" 
            value={stat.progress} 
            max="100"
          ></progress>
        </div>
      ))}
    </div>
  )
}

export default Card
