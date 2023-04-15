import React, { useContext } from "react";
import { GithubContext } from "../GithubContext";

function UserSearch() {
  const context = useContext(GithubContext);
  const { query, users, loading, getInput } = context;

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="insert user"
        onChange={getInput}
      />
      <br />
      {loading ? <p>Loading...</p> : null}

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>{user.login}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results...</p>
      )}
    </div>
  );
}

export default UserSearch;
