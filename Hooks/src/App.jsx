
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
  createContext
} from "react";

// 1. Create Context
const UserContext = createContext();


// Child component to demonstrate useCallback
const Child = React.memo(function Child({ onShowMessage }) {
  console.log("Child component rendered");

  return (
    <button onClick={onShowMessage}>
      Show Message
    </button>
  );
});


export default function App() {

  // 2. useState: Manage state
  const [name, setName] = useState("Rushikesh");
  const [color, setColor] = useState("black");
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);
  const [time, setTime] = useState(0);

  // State for Context
  const [username, setUsername] = useState("Siddharth");

  // 3. useEffect: Timer
  useEffect(() => {

    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(timer);
    };

  }, []);

  // 4. useRef: Access input element
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  // 5. useMemo: Calculate square
  const square = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  // 6. useCallback: Memorize function
  const showMessage = useCallback(() => {
    alert("Hello! useCallback is working.");
  }, []);

  return (

    // Context Provider
    <UserContext.Provider value={username}>

      <div style={{
        padding: "25px",
        fontFamily: "Arial",
        backgroundColor: "#f1f5f9",
        minHeight: "100vh"
      }}>

        <h1>React Hooks Dashboard</h1>

        {/* useContext */}
        <section>
          <h2>1. useContext</h2>

          <h3>Welcome, {username}</h3>

          <button onClick={() => setUsername("Rushikesh")}>
            Change Context Name
          </button>
        </section>

        <hr />

        {/* useState */}
        <section>
          <h2>2. useState</h2>

          <h3>Good Morning, {name}</h3>

          <button onClick={() => setName("Siddharth")}>
            Change Name
          </button>

          <h3 style={{ color: color }}>
            My Favorite Color is {color}
          </h3>

          <button onClick={() => setColor("red")}>
            Change Color
          </button>

          <h3>Count: {count}</h3>

          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </section>

        <hr />

        {/* useEffect */}
        <section>
          <h2>3. useEffect</h2>

          <h3>Timer: {time} seconds</h3>

          <p>Timer increases every second.</p>
        </section>

        <hr />

        {/* useRef */}
        <section>
          <h2>4. useRef</h2>

          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your name"
          />

          <button onClick={focusInput}>
            Focus Input
          </button>
        </section>

        <hr />

        {/* useMemo */}
        <section>
          <h2>5. useMemo</h2>

          <h3>Number: {number}</h3>

          <h3>Square: {square}</h3>

          <button onClick={() => setNumber(number + 1)}>
            Increase Number
          </button>
        </section>

        <hr />

        {/* useCallback */}
        <section>
          <h2>6. useCallback</h2>

          <Child onShowMessage={showMessage} />

          <p>Click the button to execute the memorized function.</p>
        </section>

      </div>

    </UserContext.Provider>
  );
}


// Component using useContext
export function UserProfile() {

  const username = useContext(UserContext);

  return <h2>Current User: {username}</h2>;
}
