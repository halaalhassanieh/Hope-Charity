import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation

const LatestNews = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 3; //  Show only one row (3 blogs per page)
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      alert("Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  if (loading) {
    return (
      <div className="p-8 font-vietnam text-center text-gray/600">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="custom-tap:py-[120px] py-[100px]">
      <div className="custom-container">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 pb-4 border-b-4 border-black">
          <h2 className="custom-xl:text-[50px] custom-tap:text-[45px] text-[40px] text-black font-bold pb-3 custom-tap:w-2/3 w-3/4">
            Latest News and Blog
          </h2>
          <button
            onClick={() => navigate("/news")}
            className="text-black border-2 border-black px-4 py-2 rounded-lg text-sm font-bold transition"
          >
            More news
          </button>
        </div>

        {/* Blog Grid - Only 3 per page = 1 row */}
        <div className="grid grid-cols-1 custom-tap:grid-cols-2 custom-xl:grid-cols-3 gap-6">
          {paginatedBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between"
            >
              {blog.image && (
                <img
                  src={`${blog.image}`}
                  alt={blog.title}
                  className="w-full max-h-60 object-cover rounded-lg mb-4"
                />
              )}
              <div>
                <div className="text-sm text-black/60 space-y-1">
                  <p>
                    <strong>Created:</strong>{" "}
                    {new Date(blog.createdAt).toLocaleString()}
                  </p>
                </div>
                <h3 className="text-xl font-bold text-black mb-1">
                  {blog.title}
                </h3>
                <p className="text-gray/600 mb-2 max-h-5 line-clamp-3">
                  {blog.description}
                </p>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="bg-orange/500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded-full border ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "bg-white text-black border-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal for Read More */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
            <p className="text-sm text-black/60 mb-4">
              {new Date(selectedBlog.createdAt).toLocaleString()}
            </p>
            {selectedBlog.image && (
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full mb-4 rounded"
              />
            )}
            <p className="text-black whitespace-pre-wrap">
              {selectedBlog.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestNews;
