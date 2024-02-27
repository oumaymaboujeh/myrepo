import * as React from "react";

function App() {
  return (
  <div>
  <h1>My Hacker Stories</h1>
  <label htmlFor="search">Search: </label>
  <input id="search" type="text" />
  <hr />
  <List />
  </div>
  );
  }
  
function List() {
  return (
  <ul>
  {list.map(function (item) {
  return (
  <li key={item.objectID}>
  <span>
  <a href={item.url}>{item.title}</a>
  </span>
  <span>{item.author}</span>
  <span>{item.num_comments}</span>
  <span>{item.points}</span>
  </li>
  );
  })}
  </ul>
  );
  }

  function Search() {
    return (
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    </div>
    );
    }
