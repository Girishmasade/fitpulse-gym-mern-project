
const UserManagementHeader = ({title, subtitle}) => {
  return (
    <div className="flex justify-between p-4 text-white w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold bg-gradient-neon-green">
          {title}
        </h1>
        <p className="text-gray-400">
         {subtitle}
        </p>
      </div>
    </div>
  );
};

export default UserManagementHeader;
