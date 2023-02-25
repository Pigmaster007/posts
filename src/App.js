import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  fetch(`https://dummyjson.com/posts`)
   .then((response) =>{
    if (!response.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${response.status}`
      )} 
    return response.json()
  })
   .then((dataJson) => {
    setData(dataJson);
    setError(null);
    console.log(dataJson)})
   .catch((err) => {
    setError(err.message);
    setData(null);
   })
   .finally(() => {
    setLoading(false);
  });
 }, []);

 return (
 <div className="App">
  <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.posts.map(({ id, title, body}) => (
            <li key={id}>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
      </ul>
 </div>
 );
}

export default App;
