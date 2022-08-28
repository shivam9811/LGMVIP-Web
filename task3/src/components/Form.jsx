import React, { useState } from "react";

function Form({ setStudents, students }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    website: "",
    image: "",
    gender: "",
    skills: [],
  });
  const handleChange = (e) => {
    let input = e.currentTarget;
    const data = { ...student };
    if (input.name === "skills") {
      data[input.name].push(input.value);
    } else {
      data[input.name] = input.value;
    }
    setStudent(data);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setStudent({
      name: "",
      email: "",
      website: "",
      image: "",
      gender: "",
      skills: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [...students];
    data.push(student);
    setStudents(data);
    setStudent({
      name: "",
      email: "",
      website: "",
      image: "",
      gender: "",
      skills: [],
    });
  };

  return (
    <div className="col-4 offset-1 mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={student["name"]}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={handleChange}
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={student["email"]}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="website" className="form-label">
            Website
          </label>
          <input
            type="text"
            className="form-control"
            id="website"
            name="website"
            onChange={handleChange}
            value={student["website"]}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image Link
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            onChange={handleChange}
            value={student["image"]}
          />
        </div>

        <div className="mb-3 d-flex">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <div className="ms-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                onChange={handleChange}
                value="male"
                id="male"
                checked={student["gender"] === "male"}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="female"
                checked={student["gender"] === "female"}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>

        <div className=" mb-3 d-flex">
          <label htmlFor="image" className="form-label">
            Skills
          </label>
          <div className="d-flex">
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                onChange={handleChange}
                type="checkbox"
                name="skills"
                value="html"
                id="html"
                checked={student["skills"].includes("html")}
              />
              <label className="form-check-label" htmlFor="html">
                html
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                onChange={handleChange}
                type="checkbox"
                value="css"
                name="skills"
                id="css"
                checked={student["skills"].includes("css")}
              />
              <label className="form-check-label" htmlFor="css">
                css
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input"
                onChange={handleChange}
                type="checkbox"
                value="js"
                name="skills"
                id="js"
                checked={student["skills"].includes("js")}
              />
              <label className="form-check-label" htmlFor="js">
                js
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button onClick={handleClear} className="btn btn-danger ms-3">
          Clear
        </button>
      </form>
    </div>
  );
}

export default Form;
