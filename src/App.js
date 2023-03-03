import { useState, useEffect } from "react";
import './App.css';
import Post from './components/post/Post'

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
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div id="mainField">
      <ul>
        {data &&
          data.posts.map(({ id, title, body}) => (
            <li key={id}>
              {Post(title, body, id)}
            </li>
          ))}
      </ul>

      </div>
 </div>
 );
}

export default App;
