import { createContext, useContext, useState } from "react";

// # posts context
const PostsContext = createContext();

// # posts context provider export
export const PostsContextProvider = ({ children }) => {
  const [postsList, setPostsList] = useState({
    title: "titolo",
    description: "description text",
    image: "image path",
  });

  return (
    <PostsContext.Provider value={postsList}>{children}</PostsContext.Provider>
  );
};

// # context export
export const postsContext = () => {
  return useContext(PostsContext);
};
