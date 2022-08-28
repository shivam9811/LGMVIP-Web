import React from "react";
import "./user.css";

function User({ first, last, email, img }) {
  return (
    <>
      <div className="card user col-3 offset-1 m-2">
        <img src={img} className="card-img-top" alt={first} />
        <div className="card-body">
          <h5 className="card-title">
            {first} {last}
          </h5>
          <p className="card-text">{email}</p>
        </div>
      </div>
    </>
  );
}

export default User;
