import { useEffect, useState } from "react";
import axios from "axios";
import WalletRechargeCard from "./WalletRechargeCard";

const WalletRechargeRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Show 9 cards per page (3 rows × 3 cards)
  const cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchWalletRequests();
  }, []);

  const fetchWalletRequests = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("/api/wallet-requests", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      // ✅ Only keep requests with status "pending"
      const pendingRequests = response.data.filter(
        (req) => req.status === "pending"
      );

      setRequests(pendingRequests);
    } catch (error) {
      console.error("Error fetching wallet requests:", error);
      alert("Failed to load wallet requests.");
    } finally {
      setLoading(false);
    }
  };

  const handleAction = (id) => {
    setRequests((prev) => prev.filter((req) => req._id !== id));
  };

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentRequests = requests.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(requests.length / cardsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div className="p-8 font-vietnam text-center text-gray/600">Loading requests...</div>;
  }

  if (requests.length === 0) {
    return <div className="p-8 font-vietnam text-center text-gray/600" >No pending wallet recharge requests found.</div>;
  }

  return (
    <div className="w-full custom-tap:px-12 px-1 custom-tap:py-[60px] py-3 font-vietnam bg-gray/100">
      <h2 className="text-2xl text-orange/500 font-bold pb-3 border-b-4 border-black">
        All wallet requests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-3">
        {currentRequests.map((request) => (
          <WalletRechargeCard
            key={request._id}
            request={request}
            onAction={handleAction}
          />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-6 mt-3 font-vietnam text-gray-700">
        <button
          className="px-5 py-2 rounded-xl bg-orange-200 hover:bg-orange-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-lg font-semibold px-4 py-2 bg-orange-100 rounded-xl shadow-inner text-orange-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-5 py-2 rounded-xl bg-orange-200 hover:bg-orange-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WalletRechargeRequests;
