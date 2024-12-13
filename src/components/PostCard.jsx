import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <>
      <div className="col col-4 my-3">
        <div className="post-card card h-100">
          {/* <button
            onClick={() => handleDeletePostButton(post.id)}
            data-bs-theme="dark"
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button> */}
          <img
            src={`${post.image}`}
            className="card-img-top"
            alt={post.title}
          />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.description}</p>
            <Link to={`/posts/${post.id}`}>
              <button className="btn btn-info">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
