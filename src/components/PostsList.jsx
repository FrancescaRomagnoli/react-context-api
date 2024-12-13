// import { useState, useEffect, useContext } from "react";
import { postsContext } from "../contexts/PostsContext";
import PostCard from "./PostCard";

export default function PostsList() {
  const { postsList } = postsContext();
  console.log(postsList);

  return (
    <>
      <div className="row">
        {postsList.length > 0 ? (
          postsList.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })
        ) : (
          <div>
            <h6>No posts available </h6>
          </div>
        )}
      </div>
    </>
  );
}
