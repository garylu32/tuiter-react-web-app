import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faShare, faHeart } from '@fortawesome/free-solid-svg-icons';

const TuitStatsItem = ( {tuit} ) => {

    const [liked, setLiked] = useState(tuit.liked);
    const [likesCount, setLikesCount] = useState(tuit.likes);

    const handleLikeToggle = () => {
        if (liked) {
            setLikesCount((prevCount) => prevCount - 1);
        } else {
            setLikesCount((prevCount) => prevCount + 1);
        }
        setLiked((prevLiked) => !prevLiked);
    };

    return (
        <div>
            <div className="row mt-1">
                <div className="col-3"><FontAwesomeIcon icon={faComment} className="me-1"/>{tuit.replies}</div>
                <div className="col-3"><FontAwesomeIcon icon={faRetweet} className="me-1"/>{tuit.retuits}</div>
                <div className="col-3" onClick={handleLikeToggle}><FontAwesomeIcon
                    className="me-1"
                    icon={faHeart}
                    style={{ color: liked ? "red" : "black", cursor: "pointer" }}
                />
                     {likesCount}
                </div>
                <div className="col-3"><FontAwesomeIcon icon={faShare} /></div>
            </div>
        </div>
    );
};

export default TuitStatsItem;