import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faShare, faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStatsItem = ( {tuit} ) => {
    const dispatch = useDispatch();
    const [liked, setLiked] = useState(tuit.liked);
    const [likesCount, setLikesCount] = useState(tuit.likes);
    const [disliked, setdisLiked] = useState(tuit.disliked);
    const [dislikesCount, setdisLikesCount] = useState(tuit.dislikes);

    const handleLikeToggle = () => {
        if (liked) {
            setLikesCount((prevCount) => prevCount - 1);
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: !tuit.liked }))
        } else {
            setLikesCount((prevCount) => prevCount + 1);
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: !tuit.liked }))
        }
        setLiked((prevLiked) => !prevLiked);
    };

    const handleDisLikeToggle = () => {
        if (disliked) {
            setdisLikesCount((prevCount) => prevCount - 1);
            dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes - 1, disliked: !tuit.disliked }))
        } else {
            setdisLikesCount((prevCount) => prevCount + 1);
            dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked: !tuit.disliked }))
        }
        setdisLiked((prevdisLiked) => !prevdisLiked);
    };

    return (
        <div>
            <div className="row mt-1">
                <div className="col-2"><FontAwesomeIcon icon={faComment} className="me-1"/>{tuit.replies}</div>
                <div className="col-2"><FontAwesomeIcon icon={faRetweet} className="me-1"/>{tuit.retuits}</div>
                <div className="col-2" onClick={handleLikeToggle}><FontAwesomeIcon
                    className="me-1"
                    icon={faHeart}
                    style={{ color: liked ? "red" : "black", cursor: "pointer" }}
                />
                     {likesCount}
                </div>
                <div className="col-2" onClick={handleDisLikeToggle}><FontAwesomeIcon
                    className="me-1"
                    icon={faThumbsDown}
                    style={{ color: disliked ? "blue" : "black", cursor: "pointer" }}
                />
                    {dislikesCount}
                </div>
                <div className="col-2"><FontAwesomeIcon icon={faShare} /></div>
            </div>
        </div>
    );
};

export default TuitStatsItem;