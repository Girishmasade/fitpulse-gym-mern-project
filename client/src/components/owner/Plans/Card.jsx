import {
  CircleAlert,
  DollarSign,
  RefreshCcw,
  TrendingUp,
  Users,
} from "lucide-react";

const Card = () => {
  const cardData = [
    {
      title: "Active Members",
      value: "2,847",
      change: "+12.5%",
      changeColor: "green",
      icon: (
        <Users className="text-[#39FF14] bg-[#37ff148c] w-12 h-12 p-3 rounded-full" />
      ),
    },
    {
      title: "Monthly Revenue",
      value: "$47,280",
      change: "+8.2%",
      changeColor: "cyan",
      icon: (
        <DollarSign className="text-[#14efff] bg-[#14ffff67] w-12 h-12 p-3 rounded-full" />
      ),
    },
    {
      title: "Renewal Rate",
      value: "94.3%",
      change: "+2.1%",
      changeColor: "green",
      icon: (
        <RefreshCcw className="text-[#39FF14] bg-[#37ff148c] w-12 h-12 p-3 rounded-full" />
      ),
    },
    {
      title: "Pending Renewals",
      value: "127",
      change: "+15",
      changeColor: "orange",
      icon: (
        <CircleAlert className="text-[#fffb14] bg-[#fffb148c] w-12 h-12 p-3 rounded-full" />
      ),
    },
  ];

  const changeColors = {
    green: "text-[#39FF14]",
    cyan: "text-[#14efff]",
    orange: "text-[#fffb14]",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-2">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-[#121820] flex justify-between items-center p-4 border border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow h-[130px]"
        >
          <div className="flex flex-col justify-between h-full">
            <h3 className="text-sm text-gray-400">{card.title}</h3>
            <h1 className="text-xl font-semibold text-white">{card.value}</h1>
            <span className={`flex items-center gap-1 text-sm ${changeColors[card.changeColor]}`}>
              <TrendingUp className="w-4 h-4" /> {card.change}
            </span>
          </div>
          <div className="ml-4">{card.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
