import React from "react";
import "./Timeline.css";
import { PostedField } from "./PostedField/PostedField";
import { Post } from "./Post/Post";
const Timeline = () => {
  return (
    <div className="timeline">
      <PostedField />
      <Post />
    </div>
  );
};

export default Timeline;
