import React from "react";

function StudentInfo({ name, email, image, skills, gender, website }) {
  const sgender = (g) => {
    if (g.gender === "male") {
      return (
        <i
          className="fa fa-mars"
          style={{ color: "lightBlue", fontSize: 30, fontWeight: "bolder" }}
        ></i>
      );
    } else {
      return (
        <i
          className="fa fa-venus"
          style={{ color: "pink", fontSize: 30, fontWeight: "bolder" }}
        ></i>
      );
    }
  };
  return (
    <div className="card m-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid rounded-start"
            alt={name}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex gap-5 align-items-center">
              <h5 className="card-title">{name.toUpperCase()}</h5>
              {sgender({ gender })}
            </div>
            <p className="card-text">{email}</p>
            <p className="card-text">
              <a href="/">{website}</a>
            </p>
            <div className="d-flex">
              {skills.map((skill) => (
                <p className="ms-2"> {skill}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentInfo;
