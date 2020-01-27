import React, { useEffect, useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import Results from "../Results/Results";
import { getRecommendations } from "../../utils/utils";

const Search = () => {
  const [users, setUsers] = useState([]);
  const [checkedUsers, setCheckedUser] = useState([]);
  const [search, setSearch] = useState({
    showResults: false,
    showReset: false
  });
  const [results, setResults] = useState({});

  useEffect(() => {
    fetch("users.json")
      .then(res => res.json())
      .then(setUsers);
  }, [users]);

  const handleSubmit = e => {
    e.preventDefault();

    fetch("venues.json")
      .then(res => res.json())
      .then(data => getRecommendations(checkedUsers, data))
      .then(setResults)
      .then(() => setSearch({ showResults: true, showReset: true }));
  };

  const handleReset = e => {
    e.preventDefault();
    setCheckedUser([]);
    setResults({});
    setSearch({ showReset: false });
  };

  return (
    users.length ? 
    <React.Fragment>
      {!search.showResults && (
        <div className="search-form">
          <h1>Who's invited?</h1>
          <form onSubmit={e => handleSubmit(e)}>
            <Multiselect
              options={users}
              onSelect={e => setCheckedUser(e)}
              displayValue="name"
            />
            {!!checkedUsers.length && <button>Submit</button>}
          </form>
        </div>
      )}
      {search.showReset && <button onClick={e => handleReset(e)}>Reset</button>}
      {search.showResults && <Results {...results} />}
    </React.Fragment> : <h2>...Loading</h2>
  );
};

export default Search;
