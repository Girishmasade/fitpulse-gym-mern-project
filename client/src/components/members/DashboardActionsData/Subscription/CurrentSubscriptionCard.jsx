import React from "react";
import {useSelector} from "react-redux";

const CurrentSubscriptionCard = () => {
  const {subscription, period} = useSelector((state) => state.subscriptionStore);
  return (
    <div className="flex flex-col p-6 gap-4">
      <div className="overflow-x-auto">
        <table className="table items-center text-center">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Status</th>
              <th>Next Billing</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentSubscriptionCard;
