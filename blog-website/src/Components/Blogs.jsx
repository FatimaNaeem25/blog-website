import React from 'react';
import { useNavigate } from 'react-router-dom';

function Blogs({ posts }) {
  const navigate = useNavigate();

  const handleNavigate = (postId) => {
    navigate(`/blog-detail/${postId}`); // Ensure this matches your route
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32'>
      {posts.map((item, index) => (
        <div key={item.id || index} className='m-4 cursor-pointer' onClick={() => handleNavigate(item.id)}>
          <img src={item.coverimg} className='w-full h-[200px] rounded-2xl object-cover' alt={item.title} />
          <h3 className='text-red-500 mt-3'>{item.tag}</h3>
          <h3 className='font-bold mt-3'>{item.title}</h3>
          <h3 className='line-clamp-3 text-gray-400 mt-3'>{item.desc}</h3>
          <a className='text-gray-700' onClick={() => handleNavigate(item.id)}>Read More...</a>
          <div className='flex items-center mt-5'>
            <img className='rounded-full w-[35px]' src='https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg' alt='Profile' />
            <div className='ml-2'>
              <h3 className='font-bold text-[12px]'>Fatima Naeem</h3>
              <h3 className='text-gray-500 text-[10px]'>10 October 2024</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
