import React, { useState } from 'react';
import axios from 'axios';

const CreateBlogForm = () => {
  const token = localStorage.getItem('token');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // ✅ New state for image preview

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('/api/blog', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Blog created successfully!');
      console.log(response.data);

      // Reset form
      setTitle('');
      setDescription('');
      setImage(null);
      setPreviewUrl(null); // ✅ Clear preview
    } catch (error) {
      console.error(error);
      alert('Error creating blog. Please try again.');
    }
  };

  return (
    <div className="w-full px-12 py-[65px] font-vietnam bg-gray/100">
      <h2 className="text-2xl text-orange/500 font-bold mb-6 pb-4 border-b-4 border-black">
        📝 Create New Blog
      </h2>

      <form onSubmit={handleSubmit} className="space-y-1">
        {/* Title */}
        <div>
          <label className="block text-black font-semibold ">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray/600 rounded-lg focus:outline-none focus:border-orange/500"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-black font-semibold ">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray/600 rounded-lg focus:outline-none focus:border-orange/500 min-h-[120px]"
            placeholder="Write your blog content here..."
            required
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-black font-semibold ">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);
              if (file) {
                setPreviewUrl(URL.createObjectURL(file)); // ✅ Show preview
              } else {
                setPreviewUrl(null);
              }
            }}
            className="w-full p-2 border border-gray/600 rounded-lg"
            required
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="mt-4 rounded-lg shadow-md max-w-xs"
            />
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-orange/500 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-orange-600 transition duration-200"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBlogForm;
