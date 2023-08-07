import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import TuitStatsItem from "./tuit-stats";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { RiCloseLine } from "react-icons/ri";

const TuitListItem = (
    {
      tuit = {
        "_id": 345, "topic": "Energy",  "userName": "Tesla",
        "title": "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
        "time": "4d",   "image": "tesla.png", "liked": true,
        "replies": 9999,
        "retuits": 9999,
        "likes": 4869,
        "handle": "@tesla",
        "tuit": "Free Tesla for Everyone!!" }
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img width={48} className="float-end rounded-circle" src={require(`../../images/${tuit.image}`)} alt=""/>
          </div>
          <div className="col-11">
            <div>
              <RiCloseLine className="float-end"
                 onClick={() => deleteTuitHandler(tuit._id)} />
              <div><span className="fw-bolder me-1">{tuit.userName}</span><FontAwesomeIcon icon={faCircleCheck} style={{ color: 'dodgerblue' }} /> {tuit.handle} . {tuit.time}</div>
              <div>{tuit.tuit}</div>
              <div><TuitStatsItem tuit={tuit} /></div>
            </div>
          </div>
        </div>
      </li>
  );
};
export default TuitListItem;