import React from "react";
import Header from "../../components/owner/Header";
import Card from "../../components/owner/Card";
import MembersAndTrainers from "../../components/owner/MembersAndTrainers";
import QuickActions from "../../components/owner/QuickActions";

const OwnerDashboard = () => {
  return (
    <div className="flex flex-col w-full">
      <Header/>
      <Card/>
      <MembersAndTrainers/>
      <QuickActions/>
    </div>
  );
};

export default OwnerDashboard;

