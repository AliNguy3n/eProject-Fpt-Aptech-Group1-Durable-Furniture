import React from "react";
import PostList from "./Postlist/PostList";
import './Style.scss';
import PostData from "./data.json"
import { useState ,useEffect, useRef } from "react";

function Posts(){
    let inputSearch = useRef(null);
    useEffect(() =>{
        inputSearch.current.focus();
    })
    const [ searchTitle ,setSearchTitle ] = useState("")
    const [post, setPost] = useState(PostData);
    console.log("JSON DATA Inputed:",PostData);
    const handlePostLike = (id) =>{
       
        const updatePosts = [...post];
        console.log("Du lieu trong js updatePost", updatePosts);
        updatePosts.forEach((post) =>{
            if(post.id === id){
               post.likes++;
            }
        })
        setPost(updatePosts);
        console.log('Du lieu da update:',updatePosts)
    }
    const handlePostDisklike = (id) =>{
       
        const updatePosts = [...post];
        console.log("Du lieu trong js updatePost", updatePosts);
        updatePosts.forEach((post) =>{
            if(post.id === id){
               post.dislikes++;
            }
        })
        setPost(updatePosts);
        
    }
    const handleSearchTitle = (event) =>{
        const value = event.target.value;
        console.log("show Value", value)
        setSearchTitle(value)
    }
    return (
        <div>
            <div>
                <input type="text"
                placeholder="Seach by title"
                className="textstyle"
                ref={inputSearch}
                onChange={handleSearchTitle}
                 />
            </div>
            <h1> List of Posts</h1>
            <main className="post-component">
                {PostData.filter((items) => {
                    if(searchTitle === ""){
                        return items;
                    } else if(
                        items.title.toLowerCase().includes(searchTitle.toLowerCase())
                    ){
                        return items;
                    } else {
                        return null;
                    }
                }).map((items,index)=>(
                    <div className="item-post" key={index}><PostList 
                    id={items.id} 
                    title= {items.title}
                    likes= {items.likes}
                    dislikes= {items.dislikes}
                    desc= {items.desc}
                    info= {items.info}
                    img= {items.img} 
                    onPostLike={handlePostLike}
                    onPostDislike= {handlePostDisklike}  
                    /></div>)  
                )}
    
            </main>
        </div>
    )
}
export default Posts;