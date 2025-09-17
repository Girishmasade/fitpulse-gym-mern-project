import { ArrowLeft } from 'lucide-react';
import React from 'react';
import CurrentSubscriptionCard from '../../components/members/DashboardActionsData/Subscription/CurrentSubscriptionCard';
import SubscriptionPlans from '../../components/members/DashboardActionsData/Subscription/SubscriptionPlans';
import AddPaymentMethod from '../../components/members/DashboardActionsData/Subscription/AddPaymentMethod';

const Subscription = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black bg-opacity-50 lg:pt-9 pt-6 lg:px-20 px-2 min-h-screen overflow-y-auto">
      <div className="flex gap-6">
        <button className="cursor-pointer text-gray-500 hover:bg-[#39ff14] p-2 rounded-md hover:text-gray-800"><ArrowLeft /></button>
      <div className="flex flex-col">
        <h1 className='text-4xl font-bold'>Membership <span className='bg-gradient-to-tr from-[#39ff14] to-cyan-500 text-transparent bg-clip-text'>Subscription</span></h1>
        <span className="text-gray-500">Choose your plan and manage your subscription</span>
      </div>
      </div>

      <div className="w-full bg-gray-800 rounded-lg border border-gray-700 mt-6">
        <CurrentSubscriptionCard/>
      </div>

      <div className="flex mt-8 gap-6">
        <SubscriptionPlans/>
        <AddPaymentMethod/>
      </div>
    </div>
  );
};

export default Subscription;
