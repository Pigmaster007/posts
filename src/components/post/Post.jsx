import './Post.css';

export default function Post (post) {
    return (
      <div className="Post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button>Read more</button>
      </div>
    )
};