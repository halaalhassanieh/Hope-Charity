import { useNavigate } from 'react-router-dom';

const ProfileModal = ({ onClose }) => {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="absolute top-14 right-0 w-64 bg-white shadow-xl rounded-xl border border-gray-300 z-50">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Profile</h3>
        <p className="text-sm text-gray-600 mb-4">{email}</p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
        >
          Logout
        </button>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-500 hover:text-black"
      >
        ×
      </button>
    </div>
  );
};

export default ProfileModal;
