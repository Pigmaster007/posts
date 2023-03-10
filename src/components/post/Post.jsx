import './Post.css';

export default function Post (title, body) {

  const screenNod = document.getElementById("Screen");
  const handleClick = (e) => {
    if (e.target.parentNode.className === "Post") {
      e.target.parentNode.className = "PostClicked"
      screenNod.style.display = 'block';
      document.body.style.overflow = 'hidden'
      e.target.innerText = "Read less"
    } else {
      e.target.parentNode.className = "Post"
      screenNod.style.display = 'none';
      document.body.style.overflow = 'auto'
      e.target.innerText = "Read more"
    }
    
    screenNod.addEventListener('click', event => {
      screenNod.style.display = 'none';
      e.target.parentNode.className = "Post"
      document.body.style.overflow = 'auto'
    })
  }

  return (
      <div className="Post">
        <h3>{title}</h3>
        <p>{body}</p>
        <button className="readMore" onClick={handleClick}>Read more</button>
      </div>
    )
};