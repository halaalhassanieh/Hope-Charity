import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password
      });

      // ✅ Store token and email in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", email); // Or use response.data.user.email
      localStorage.setItem("isAdmin", response.data.isAdmin);
      localStorage.setItem("wallet", response.data.wallet);
      console.log("Login success:", response.data);
      navigate("/dashboard");
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-vietnam px-4">
      <div className="custom-container w-full max-w-2xl bg-white p-12 rounded-2xl shadow-custom border border-gray-300">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8 text-lg">
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            <label className="block text-gray-600 mb-2 text-xl">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-xl bg-white/60 text-black focus:outline-none focus:ring-4 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-2 text-xl">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-6 py-4 border border-gray-300 rounded-xl bg-white/60 text-black focus:outline-none focus:ring-4 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? "bg-orange-300" : "bg-orange-500 hover:bg-orange-600"} text-white py-4 text-xl rounded-xl transition duration-200 font-semibold`}
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          <p className="text-md text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-orange-500 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
