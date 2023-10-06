import '../../../App.scss'
import { useState } from 'react';

function PostList({id, title, likes, dislikes,desc, info, img, onPostLike, onPostDislike}) {
    // const [likes,setLikes] = useState(0);
    // const [dislikes,setDislikes] = useState(0);
    const handleLikeClick = () => {
        // setLikes(likes + 1);
        onPostLike(id)
    }
    const handleDisklikeClick = () => {
        // setDislikes(dislikes + 1);
        onPostDislike(id)
    }
    return(
        <div>
            <h1>{title}</h1>
            <div>{likes}</div>
            <button className='add' onClick={handleLikeClick}>Like</button>
            <div>{dislikes}</div>
            <button className='sub' onClick={handleDisklikeClick}>Dislike</button>
        </div>
    )
}
export default PostList;