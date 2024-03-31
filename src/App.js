import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // const value = 0;
  const arr = [
    "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
  ];
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className="container">
        <div>
          {arr.slice(0, count).map((item) => {
            return <img src={item} alt="nothing" />;
          })}
        </div>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    </>
  );
}

export default App;
