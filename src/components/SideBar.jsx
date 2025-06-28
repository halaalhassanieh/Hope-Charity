import React, { useState } from 'react';
import CreateBlogForm from './CreateBlogForm';
import WalletRechargeRequests from './WalletRechargeRequests';
import AllBlogs from './AllBlogs';
// ضل بس الريسبونسيف

const SideBar = () => {
  const [selectedComponent, setSelectedComponent] = useState('AllBlogs');

  const renderContent = () => {
    switch (selectedComponent) {
      case 'AllBlogs':
        return <AllBlogs/>;
        case 'createBlog':
        return <CreateBlogForm/>;
        case 'walletRequests':
        return <WalletRechargeRequests/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className=" py-4  bg-gray/100 text-black/60 font-vietnam px-4 w-1/4">
        <div className="text-orange/500 text-2xl font-bold my-8 pl-2 pr-4 py-4 border-b-4  border-black">
          Admin Control
        </div>
        <nav className="flex flex-col pl-2 pr-4 text-center gap-2">
          <div className="border-b-2 border-orange/500 px-3 py-7 shadow-lg">
            <button
              onClick={() => { setSelectedComponent('AllBlogs'), renderContent()}}
              className="hover:text-gray/600 border-none font-bold text-black"
            >
              All Blogs
            </button>
          </div>
          <div className="border-b-2 border-orange/500 px-3 py-7 shadow-lg ">
            <button
              onClick={() => {setSelectedComponent('createBlog'), renderContent()}}
              className="hover:text-gray/600 border-none font-bold text-black"
            >
              Create Blog
            </button>
          </div>
          
          <div className="border-b-2 border-orange/500 px-3 py-7 shadow-lg">
            <button
              onClick={() => { setSelectedComponent('walletRequests'), renderContent()}}
              className="hover:text-gray/600 border-none font-bold text-black"
            >
              Wallet Recharge Requests
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-10 w-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default SideBar;
