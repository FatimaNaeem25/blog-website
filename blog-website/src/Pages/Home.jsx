import React, { useState, useEffect } from 'react';
import GlobalApi from '../Services/GlobalApi';
import Header from '../Components/Header';
import Search from '../Components/Search';
import IntroPost from '../Components/IntroPost';
import Blogs from '../Components/Blogs';
import Footer from '../Components/Footer';

function Home() {
    const [post, setPost] = useState([]);
    const [orgPost, setOrgPost] = useState([]);

    useEffect(() => {
        getPost();
    }, []);

    const getPost = () => {
        GlobalApi.getPost()
            .then(resp => {
                const result = resp.data.map(item => ({
                    id: item.id || null,
                    title: item.title || 'Untitled',
                    tag: item.tag || 'no tag added',
                    desc: item.description || 'empty',
                    coverimg: item.coverimg ||'no image found',
                }));
                setPost(result);
                setOrgPost(result);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    };

    const renderIntroPost = () => {
        if (post.length === 0) {
            return <div>Loading posts...</div>; // Loading message
        }
        return <IntroPost post={post[0]} />; // Pass only the first post
    };
    const filterPost=(tag)=>{
        if(tag=='All'){
            setPost(orgPost);
            return ;
        }
        const result=orgPost.filter(item=>item.tag==tag);
        setPost(result);
    }
    return (
        <div>
            <Search selectedTag={(tag)=>filterPost(tag)} />
            {renderIntroPost()} {/* Call the render function here */}
            <Blogs posts={post} />
        </div>
    );
}

export default Home;
