import React from "react";
import "./Post.css";
import { Favorite, MoreVert } from "@mui/icons-material";
export const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postHeader flexCenter">
          <div className="postHeaderLeft flexCenter">
            <div className="postUserProfile flexCenter">
              <img src="/assets/person/1.jpeg" alt="" className="postUserImg" />
              <span className="postUserName">ユーザー</span>
            </div>
            <span className="postTime ml5 fs10">4月23日</span>
          </div>
          <div className="postHeaderRight">
            <MoreVert />
          </div>
        </div>
        <div className="postBody">hogehoge</div>
        <div className="postHooter flexCenter">
          <div className="likes flexCenter">
            <Favorite htmlColor="red" fontSize="12px" />
            <span className="fs12 ml5">20人がいいねしました。</span>
          </div>
          <div className="comments fs12">3コメント</div>
        </div>
      </div>
    </div>
  );
};
