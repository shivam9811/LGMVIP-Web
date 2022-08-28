import React from "react";
import User from "./User";
import Spinner from "./Spinner";

function UsersList({ users, isLoading }) {
  return !users.lenght && isLoading ? (
    <>
      <Spinner />
    </>
  ) : (
    <div className="row offset-2">
      {users.map((m) => (
        <User
          key={m.id}
          first={m.first_name}
          last={m.last_name}
          email={m.email}
          img={m.avatar}
        />
      ))}
    </div>
  );
}

export default UsersList;
