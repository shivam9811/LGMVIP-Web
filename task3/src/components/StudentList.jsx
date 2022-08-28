import React from "react";
import StudentInfo from "./StudentInfo";

function StudentList({ students }) {
  return (
    <div className="card col-4 offset-1 mt-5">
      {students.map((student) => (
        <StudentInfo
          key={student.name}
          name={student.name}
          email={student.email}
          website={student.website}
          gender={student.gender}
          skills={student.skills}
          image={student.image}
        />
      ))}
    </div>
  );
}

export default StudentList;
