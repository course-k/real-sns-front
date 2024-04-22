import React from "react";
import "./PostedField.css";
import { Analytics, Face, Gif, Photo } from "@mui/icons-material";
export const PostedField = () => {
  return (
    <div className="postedField">
      <div className="postedFieldWrapper">
        <div className="postedFieldTextarea">
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="postedFieldPerson"
          />
          <input
            type="text"
            className="postedFieldInput"
            placeholder="今どんな気持ち？"
          />
        </div>
        <hr className="postedFieldHr" />
        <div className="iconArea">
          <div className="postOptions">
            <div className="postOption">
              <Photo htmlColor="blue" />
              <p>写真</p>
            </div>
            <div className="postOption">
              <Gif htmlColor="red" />
              <p>GIF</p>
            </div>
            <div className="postOption">
              <Face htmlColor="green" />
              <p>気持ち</p>
            </div>
            <div className="postOption">
              <Analytics htmlColor="red" />
              <p>投票</p>
            </div>
          </div>
          <button className="postButton">投稿</button>
        </div>
      </div>
    </div>
  );
};
