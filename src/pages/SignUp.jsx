import { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", { email, password, age });
  };

  return (
  
    <div className="min-h-screen flex items-center justify-center bg-gray/100 font-vietnam px-4">
      <div className="custom-container w-full max-w-2xl bg-white p-12 rounded-2xl shadow-custom border-1 border-gray/600">
        <h2 className="text-4xl font-bold text-center text-orange/500 mb-10">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8 text-lg">
          <div>
            <label className="block text-gray/600 mb-2 text-xl">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-4 border-1 border-gray/600 rounded-xl bg-white/60 text-black focus:outline-none focus:ring-4 focus:ring-orange/500"
            />
          </div>

          <div>
            <label className="block text-gray/600 mb-2 text-xl">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-6 py-4 border-1 border-gray/600 rounded-xl bg-white/60 text-black focus:outline-none focus:ring-4 focus:ring-orange/500"
            />
          </div>

          <div>
            <label className="block text-gray/600 mb-2 text-xl">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              min="1"
              className="w-full px-6 py-4 border-1 border-gray/600 rounded-xl bg-white/60 text-black focus:outline-none focus:ring-4 focus:ring-orange/500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange/500 hover:bg-orange-600 text-white py-4 text-xl rounded-xl transition duration-200 font-semibold"
          >
            Sign Up
          </button>

          <p className="text-md text-center text-gray/600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-orange/500 hover:underline font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
