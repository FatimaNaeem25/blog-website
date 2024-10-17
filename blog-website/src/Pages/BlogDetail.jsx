import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../Services/GlobalApi';
import ReactMarkdown from 'react-markdown';


function BlogDetail() {
    const { id } = useParams();
    const [post,setPost]=useState([])

    useEffect(() => {
        console.log("Rendering BlogDetail with ID:", id);
        getBlogsbyId();
    }, [id]);
    const getBlogsbyId=()=>{
        GlobalApi.getPostById(id).then(resp=>{
          const item=resp.data;
          const result={
            id: item.id || null,
                    title: item.title || 'Untitled',
                    tag: item.tag || 'no tag added',
                    desc: item.description || 'empty',
                    coverimg: item.coverimg ||'no image found',
          };

          setPost(result);
          console.log("Result",result);
        })
    }
    return (
        <div className='px-6 md:px-20 lg:px-56 mt-10'>
            <h3 className='text-red-500 text-[12px]'>{post.tag}</h3>
            <h3 className='text-[26px] font-bold'>{post.title}</h3> 
            <div className='flex items-center mt-5'>
            <img className='rounded-full w-[35px]' 
            src='https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg' 
            alt='Profile' />
            <div className='ml-2'>
              <h3 className='font-bold text-[12px]'>Fatima Naeem</h3>
              <h3 className='text-gray-500 text-[10px]'>10 October 2024</h3>
            </div>
          </div> 
            <img src={post.coverimg} className='rounded-2xl my-5 w-full'></img>
            <ReactMarkdown children={post.desc} excapeHtml={false} className='leading-9'></ReactMarkdown>
        </div>
    );
}

export default BlogDetail;
