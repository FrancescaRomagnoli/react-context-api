import { createContext, useContext, useEffect, useState } from "react";

// # posts context
const PostsContext = createContext();

// # posts context provider export
export const PostsContextProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts/")
      .then((res) => res.json())
      .then((data) => {
        setPostsList(data);
      });
  }, []);

  return (
    <PostsContext.Provider value={{ postsList }}>
      {children}
    </PostsContext.Provider>
  );
};

// # context export
export const postsContext = () => {
  return useContext(PostsContext);
};
