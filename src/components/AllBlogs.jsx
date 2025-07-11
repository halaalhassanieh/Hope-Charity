import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SelectedBlog from './SelectedBlog';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [editingBlog, setEditingBlog] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedImage, setUpdatedImage] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null); // For popup view

  const token = localStorage.getItem('token');
  // here is a use effect to bring all data before opening anything
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

//function to handle the button of delete a one blog only

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      await axios.delete(`/api/blog/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(blogs.filter((blog) => blog._id !== id));
      alert('Blog deleted successfully.');
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete blog.');
    }
  };
//function to handle the button of deleting all blogs 
  const handleDeleteAll = async () => {
    if (!window.confirm('Are you sure you want to delete all blogs?')) return;

    try {
      await axios.delete('/api/blog', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs([]);
      alert('All blogs deleted successfully.');
    } catch (error) {
      console.error('Delete all error:', error);
      alert('Failed to delete all blogs.');
    }
  };

  const openEditModal = (blog) => {
    setEditingBlog(blog);
    setUpdatedTitle(blog.title);
    setUpdatedDescription(blog.description);
    setUpdatedImage(null);
  };

//function to handle updating blogs 
  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append('title', updatedTitle);
      formData.append('description', updatedDescription);
      if (updatedImage) {
        formData.append('image', updatedImage);
      }

      await axios.put(`/api/blog/${editingBlog._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      fetchBlogs();
      setEditingBlog(null);
      alert('Blog updated successfully.');
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update blog.');
    }
  };
     //*here is an filter to show the wanted blogs according to search input  

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

   //just a simple condition to show loading blogs while loading 
  if (loading) {
    return <div className="p-8 font-vietnam text-center text-gray/600">Loading blogs...</div>;
  }

  return (

    <div className="custom-tap:p-8 p-4 bg-gray/100 font-vietnam">
      <div className="flex justify-between items-center mb-6 pb-4 border-b-4 border-black">
        <h2 className="text-2xl text-orange/500 font-bold">📚 All Blogs</h2>
        <button
          onClick={handleDeleteAll}
          className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
        >
          Delete All Blogs
        </button>
      </div>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search blogs by title..."
        className="w-full mb-6 p-3 border border-gray/600 rounded-lg focus:outline-none focus:border-orange/500"
      />
     {/*here is a div to show all blogs using map on the filterd blogs  */}
      <div className="grid grid-cols-1 custom-tap:grid-cols-2 custom-xl:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
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
              <h3 className="text-xl font-bold text-black mb-1">{blog.title}</h3>
              <p className="text-gray/600 mb-2 line-clamp-3">{blog.description}</p>
              <div className="text-sm text-black/60 space-y-1">
                <p><strong>Created:</strong> {new Date(blog.createdAt).toLocaleString()}</p>
                <p><strong>Updated:</strong> {new Date(blog.updatedAt).toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                onClick={(e) => { e.stopPropagation(); openEditModal(blog); }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold  transition"
              >
                Update
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleDelete(blog._id); }}
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
                 {/*here is popout window to update blog  */}
      {editingBlog && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Edit Blog</h3>

            <label className="block font-semibold mb-2">Title</label>
            <input
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="w-full mb-4 p-2 border border-gray/600 rounded-lg"
            />

            <label className="block font-semibold mb-2">Description</label>
            <textarea
              value={updatedDescription}
              onChange={(e) => setUpdatedDescription(e.target.value)}
              className="w-full mb-4 p-2 border border-gray/600 rounded-lg"
            />

            <label className="block font-semibold mb-2">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setUpdatedImage(e.target.files[0])}
              className="w-full mb-4 p-2 border border-gray/600 rounded-lg"
            />
            {updatedImage && (
              <img
                src={URL.createObjectURL(updatedImage)}
                alt="Preview"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setEditingBlog(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >Cancel</button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-orange-600"
              >Save</button>
            </div>
          </div>
        </div>
      )}

              {/*here is component to show selected blog  */}

      {selectedBlog && (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className='bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
            <SelectedBlog title={selectedBlog.title} image={selectedBlog.image} description={selectedBlog.description}
              createdAt={selectedBlog.createdAt} updatedAt={selectedBlog.updatedAt} />
            <button
              onClick={() => setSelectedBlog(null)}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >Close</button>
          </div>
        </div>

      )}
    </div>
  );
};

export default AllBlogs;
