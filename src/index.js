import React from "react";
import ReactDom from "react-dom";
import App from "./App"
import 'modern-normalize/modern-normalize.css';

// const link = React.createElement(
//   "a",
//   { href: "reactjs.org", target: "_blank" },
//   "Link"
// );
// console.log(link);

// ReactDom.render(link, document.getElementById("root"));

// const jsxLink = <a href="reactjs.org">Link</a>;
// console.log(jsxLink);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


 const painting =  {
    "id": "id-1",
    "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
    "title": "Feathers. Art abstract",
    "price": 500,
    "author": {
      "tag": "ractapopulous",
      "url": "https://pixabay.com/users/ractapopulous-24766/"
    },
    "quantity": 10
 }

 const painting2 = {
   id: "id-2",
   url: "https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg",
   title: "Bird. Animal art abstract",
   price: 400,
   author: {
     tag: "ractapopulous",
     url: "https://pixabay.com/users/ractapopulous-24766/",
   },
   quantity: 15,
 };
  
// const template = (
//   <div>
//     <img src={painting.url} alt={painting.title} width="500" />
//     <h2>{painting.title}</h2>
//     <p>Author: <a href={ painting.author.url}>{ painting.author.tag}</a></p>
//     <p>Price: {painting.price} credits </p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// console.log(template);

// ReactDom.render(template, document.getElementById("root"))

ReactDom.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );