import React from "react";
import axios from "axios";

function Navbar({ users, setUsers, isLoading, setIsLoading }) {
  const handleClick = async () => {
    const { data } = await axios.get("https://reqres.in/api/users?page=1");
    users = data.data;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setUsers(users);
    }, 2000);
  };
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LGMVIP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          ></div>
          <button className="btn btn-primary text-right" onClick={handleClick}>
            Get Users
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
