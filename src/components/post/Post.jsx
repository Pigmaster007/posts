import './Post.css';

export default function Post (title, body, keyId) {

  const handleClick = (e) => {
    if (e.target.parentNode.className === "Post") {
      e.target.parentNode.className = "PostClicked"
    } else {
      e.target.parentNode.className = "Post"
    }
  }

  const postID = 'post' + keyId

    return (
      <div className="Post" id = {postID}>
        <h3>{title}</h3>
        <p>{body}</p>
        <button className="readMore" onClick={handleClick}>Read more</button>
      </div>
    )
};