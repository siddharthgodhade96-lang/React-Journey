
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [catFact, setCatFact] = useState("");
  const [loading, setLoading] = useState(false);

  // 1. Axios with Async/Await
  const fetchUsingAxios = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://catfact.ninja/fact"
      );

      setCatFact(response.data.fact);

    } catch (error) {
      console.log("Axios Error:", error);

    } finally {
      setLoading(false);
    }
  };

  // 2. Fetch API with Async/Await
  const fetchUsingAsync = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://catfact.ninja/fact"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setCatFact(data.fact);

    } catch (error) {
      console.log("Fetch Error:", error);

    } finally {
      setLoading(false);
    }
  };

  // 3. Fetch API with .then() and .catch()
  const fetchUsingThen = () => {
    setLoading(true);

    fetch("https://catfact.ninja/fact")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        return response.json();
      })
      .then((data) => {
        setCatFact(data.fact);
      })
      .catch((error) => {
        console.log("Fetch Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Fetch data when component loads
useEffect(() => {
  const getInitialFact = async () => {
    await fetchUsingAxios();
  };

  getInitialFact();
}, []);

  return (
    <div>
      <h1>React API Fetching Methods</h1>

      <button onClick={fetchUsingAxios}>
        Fetch Using Axios
      </button>

      <button onClick={fetchUsingAsync}>
        Fetch Using Async/Await
      </button>

      <button onClick={fetchUsingThen}>
        Fetch Using .then()
      </button>

      <hr />

      <h2>Cat Fact:</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{catFact}</p>
      )}
    </div>
  );
}
