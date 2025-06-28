import React from 'react';
import axios from 'axios';

const WalletRechargeCard = ({ request, onAction }) => {
  // Guard: If request is missing or invalid, show a fallback message
  if (
    !request ||
    !request.id ||
    !request.user ||
    !request.amount ||
    !request.date
  ) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-xl font-vietnam mb-4">
        ⚠️ Invalid or incomplete request data.
      </div>
    );
  }

  const { id, user, amount, date } = request;

  const handleStatusChange = async (status) => {
    try {
      const url = `/api/wallet-requests/${id}/${status}`; // "approve" or "reject"
      await axios.put(url);
      alert(`Request ${status}ed successfully`);
      onAction(id); // Notify parent to update UI
    } catch (error) {
      console.error(error);
      alert(`Failed to ${status} request`);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mb-4 w-full max-w-3xl font-vietnam">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-bold text-black">{user.name}</h3>
          <p className="text-gray/600 text-sm">User ID: {user.id}</p>
          <p className="text-gray/600 text-sm">
            Requested on: {new Date(date).toLocaleDateString()}
          </p>
        </div>
        <div className="text-orange/500 text-xl font-bold">+${amount}</div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => handleStatusChange('approve')}
          className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
        >
          Approve
        </button>
        <button
          onClick={() => handleStatusChange('reject')}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default WalletRechargeCard;
