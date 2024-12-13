// # router import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// # context import
import { PostsContextProvider } from "./contexts/PostsContext";

// # layout import
import DefaultLayout from "./layouts/DefaultLayout";

// # pages import
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// # posts pages import
import PostsPage from "./pages/posts/PostsPage";
import PostsShow from "./pages/posts/PostsShow";

function App() {
  return (
    <>
      <PostsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={HomePage} />
              <Route path="/about" Component={AboutPage} />
            </Route>
            {/* posts routes */}
            <Route Component={DefaultLayout}>
              <Route path="/posts">
                <Route index Component={PostsPage} />
                <Route path=":id" Component={PostsShow} />
              </Route>
            </Route>
            <Route path="*" Component={NotFoundPage} />
          </Routes>
        </BrowserRouter>
      </PostsContextProvider>
    </>
  );
}

export default App;
