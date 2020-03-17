import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const products = [
    { name: "Adobe Photoshop", price: "$25" },
    { name: "Adobe Illustrator", price: "$20" },
    { name: "Adobe XD", price: "$35" },
    { name: "Adobe Reader", price: "$15" }
  ];
  const books = [
    { name: "Javascript", price: "$215" },
    { name: "Photoshop", price: "$100" },
    { name: "Web development", price: "$305" },
    { name: "Programming C", price: "$150" }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        {
          <ul>
            {books.map(book => (
              <li>
                Name : {book.name} || Price: {book.price}
              </li>
            ))}
          </ul>
        }
        {
          <ul>
            {products.map(product => (
              <li>{product.name}</li>
            ))}
          </ul>
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product> */
        products.map(pro => (
          <Product pd={pro}></Product>
        ))}
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    // const newCount = count + 1;
    // setCount(newCount);
    //or
    setCount(count + 1);
    //or we can use inline function inside onClick, like the following way.
    // <button onClick={ () => setCount(count + 1) } style={btnStyle}>Increase</button>
  };

  const handleDecrease = () => {
    // const newCount = count + 1;
    // setCount(newCount);
    //or
    setCount(count - 1);
    //or we can use inline function inside onClick, like the following way.
    // <button onClick={ () => setCount(count + 1) } style={btnStyle}>Decrease</button>
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleIncrease} style={btnStyle}>
        Increase
      </button>
      <button onClick={handleDecrease} style={btnStyle}>
        Decrease
      </button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic User {users.length}</h3>
      <ul>
        {users.map(user => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "2px solid #ddd",
    width: "300px",
    height: "400px",
    float: "left"
  };

  const { name, price } = props.pd;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style={btnStyle}>Buy Now</button>
    </div>
  );
}
const btnStyle = {
  backgroundColor: "#282C34",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "20px",
  color: "#ddd",
  cursor: "pointer"
};
export default App;
