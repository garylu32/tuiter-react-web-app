import { useDispatch, useSelector } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCircleCheck,
  faCommentDots,
  faHeart,
  faRetweet,
  faX
} from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./tuit-stats";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col-1">
              <img width={40} height={40} className="rounded-circle" src={`${tuit.image}`} />
            </div>
            <div className="col-11">
              <div><b>{tuit.userName}&nbsp;&nbsp;</b>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#0000ff", }} />&nbsp;&nbsp;
                {tuit.handle} . {tuit.time}
                <FontAwesomeIcon icon={faX} size={"xs"} className={"float-end"}
                  onClick={() => deleteTuitHandler(tuit._id)} />
              </div>
              <div>{tuit.tuit}</div>
              <br />
              <div>
                <TuitStats tuit={tuit} />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default TuitListItem;