import Navbar from "./components/Navbar";
import Form from "./components/Form";
import { useState } from "react";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  return (
    <>
      <Navbar />
      <div className="row">
        <Form setStudents={setStudents} students={students} />
        <StudentList students={students} />
      </div>
    </>
  );
}

export default App;
