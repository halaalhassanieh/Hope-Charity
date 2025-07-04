import { useState } from 'react';
import CreateBlogForm from './CreateBlogForm';
import WalletRechargeRequests from './WalletRechargeRequests';
import AllBlogs from './AllBlogs';

const SideBar = () => {
  const [selectedComponent, setSelectedComponent] = useState('AllBlogs');

  const renderContent = () => {
    switch (selectedComponent) {
      case 'AllBlogs':
        return <AllBlogs />;
      case 'createBlog':
        return <CreateBlogForm />;
      case 'walletRequests':
        return <WalletRechargeRequests />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col custom-tap:flex-row h-full">
      {/* Sidebar - Column on large, Row on small */}
      <div className="bg-gray/100 text-black/60 font-vietnam custom-tap:w-1/4 w-full py-4 px-4">
        <div className="text-orange/500 text-2xl font-bold my-4 custom-tap:my-8 pl-2 pr-4 py-2 custom-tap:py-4 border-b-4 custom-tap:border-b-4 border-black text-center custom-tap:text-left">
          Admin Control
        </div>
        <nav className="flex custom-tap:flex-col flex-row justify-around custom-tap:pl-2 pr-4 text-center gap-2 mt-4">
          <div className="border-b-2 custom-tap:border-b-2 border-orange/500 px-3 custom-tap:py-7 shadow-lg flex justify-center items-center">
            <button
              onClick={() => {
                setSelectedComponent('AllBlogs');
                renderContent();
              }}
              className="hover:text-gray/600 border-none custom-tap:font-bold font-semibold text-black "
            >
              All Blogs
            </button>
          </div>
          <div className="border-b-2 custom-tap:border-b-2 border-orange/500 px-3 py-3 custom-tap:py-7 shadow-lg flex justify-center items-center">
            <button
              onClick={() => {
                setSelectedComponent('createBlog');
                renderContent();
              }}
              className="hover:text-gray/600 border-none custom-tap:font-bold font-semibold text-black"
            >
              Create Blog
            </button>
          </div>
          <div className="border-b-2 custom-tap:border-b-2 border-orange/500 px-3 py-3 custom-tap:py-7 shadow-lg flex justify-center items-center">
            <button
              onClick={() => {
                setSelectedComponent('walletRequests');
                renderContent();
              }}
              className="hover:text-gray/600 border-none custom-tap:font-bold font-semibold text-black"
            >
              Wallet Recharge Requests
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="custom-tap:px-10 px-2 w-full">{renderContent()}</div>
    </div>
  );
};

export default SideBar;
