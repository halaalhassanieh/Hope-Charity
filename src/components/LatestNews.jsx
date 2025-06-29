import axios from "axios";
import { useEffect, useState } from "react";

//ضل بس ضبط ال onclicks لكل الازرار هون

const LatestNews = () => {
    
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
      }, []);
    
      //function to get all blogs using api
    
      const fetchBlogs = async () => {
        try {
          const response = await axios.get('/api/blog');
          setBlogs(response.data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
          alert('Failed to load blogs.');
        } finally {
          setLoading(false);
        }
      };
         //*here is an filter to show the wanted blogs according to search input  

  

   //just a simple condition to show loading blogs while loading 
  if (loading) {
    return <div className="p-8 font-vietnam text-center text-gray/600">Loading blogs...</div>;
  }

  return (

    <div className="custom-tap:py-[120px] py-[100px]" >
       <div className="custom-container">
        <div className="flex justify-between items-center mb-6 pb-4 border-b-4 border-black">
        <h2 className="custom-xl:text-[50px] custom-tap:text-[45px] text-[40px] text-black font-bold pb-3 custom-tap:w-2/3 w-3/4">Latest News and Blog</h2>
        <button
          onClick={()=>{}}
          className=" text-black border-2 border-black px-4 py-2 rounded-lg text-sm font-bold transition "
        >
          More news
        </button>
      </div>
        <div className="grid grid-cols-1 custom-tap:grid-cols-2 custom-xl:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            onClick={() => setSelectedBlog(blog)}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between cursor-pointer"
          >
            {blog.image && (
              <img
                src={`${blog.image}`}
                alt={blog.title}
                className="w-full max-h-60 object-cover rounded-lg mb-4"
              />
            )}
         {/*here is a div to show one blog  */}
            <div>
                <div className="text-sm text-black/60 space-y-1">
                <p><strong>Created:</strong> {new Date(blog.createdAt).toLocaleString()}</p>
              </div>
              <h3 className="text-xl font-bold text-black mb-1">{blog.title}</h3>
              <p className="text-gray/600 mb-2 line-clamp-3">{blog.description}</p>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                onClick={(e) => { }}
                className="bg-orange/500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold  transition"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
     
       </div>
    </div>
  )
}

export default LatestNews
