import React, { createContext, useState, useEffect } from "react";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      setUsers([]);
    }
  };

  useEffect(() => {
    async function handleSubmit() {
      if (query !== "") {
        setLoading(true);
        try {
          const response = await fetch(
            `https://api.github.com/search/users?q=${query}`
          );
          const data = await response.json();
          setUsers(data.items);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError(`💥 Error fetching: ${error.message}`);
        }
      }
    }

    handleSubmit();
  }, [query]);

  const contextValue = { query, users, error, loading, getInput };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
