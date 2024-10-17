import React from 'react';
import { useNavigate } from 'react-router-dom';

function IntroPost({ post }) {
  const navigate=useNavigate();
  if (!post) {
    return <div>No post available</div>; // Handle case where no post is passed
  }

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 mt-10 px-10  md:px-15 lg:px-32 gap-8 cursor-pointer' 
    onClick={()=> navigate ('blog-detail/'+post.id)}>
      <img src={post.coverimg} className='rounded-2xl object-cover w-full h-full'></img>
      <div>
        <h4 className='text-red-500'>{post.tag}</h4>
        <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
        <h4 className='line-clamp-3 text-gray-400 mt-5'>{post.desc}</h4>
        <a className='text-gray-700' onClick={()=> navigate ('blog-detail/'+post.id)}>Read More...</a>
        <div className='flex items-center mt-5'>
          <img className='rounded-full w-[50px]'
          src='https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg'></img>
          <div className='ml-2'>
            <h3 className='font-bold'>Fatima Naeem</h3>
            <h3 className='text-gray-500'>10 October 2024</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPost;
