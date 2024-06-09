import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

let timer;
function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasmore] = useState(false);
  const [page, setPage] = useState(1);
  const observer = useRef();
  const lastElement = (node) => {
    if (loading) return
    if (observer.current) {
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    })
    if (node) observer.current.observe(node);
  }

  useEffect(() => {
    setData([]);
  }, [query])

  useEffect(() => {
    setLoading(true);
    const getSearchItems = async () => {
      const shows = await axios.get(
        `http://openlibrary.org/search.json?title=${query}&page=${page}`
      );
      setLoading(false);
      setHasmore(books.data.docs.length > 0);
      setData((prev) => {
        return [...new Set([...prev, ...shows.data.docs.map((show) => show.title)])]
      });
    };

    getSearchItems();

  }, [query, page]);
  const handleChange = (e) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      setQuery(e.target.value);
      setPage(1);
    }, 1000);
  };
  return (
    <>
      <div className="searchContainer">
        <div class="input-container">
          <input
            className="input"
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <label>Search Here</label>
        </div>
        {data.map((book, index) => {
          if (data.length === index + 1) {
            return <div key={index} ref={lastElement} className="searchTitle">
              {book}
            </div>
          }
          return <div key={index} className="searchTitle">
            {book}
          </div>
        })}
        {/* <div>{loading? "Loading....":""}</div> */}
      </div>
    </>
  );
}

export default App;
