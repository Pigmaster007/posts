
export default function Post (id, title, body) {
    return (
      <div className="post" id={id}>
        <h1>{title}</h1>
        <div>{body}</div>
        <button>Read more</button>
      </div>
    )
};