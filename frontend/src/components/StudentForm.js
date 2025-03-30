import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // Define available course options
  const courseOptions = [
    "Bachelor of Science in Information Technology",
    "Bachelor of Science in Computer Science",
    "Bachelor of Science in Business Administration",
    "Bachelor of Science in Accountancy",
    "Bachelor of Secondary Education",
    "Bachelor of Science in Nursing",
    "Bachelor of Science in Electrical Engineering"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && course) {
      addStudent(name, course);
      setName(""); // Clear input fields
      setCourse("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      
      {/* Course Dropdown */}
      <select value={course} onChange={(e) => setCourse(e.target.value)} required>
        <option value="" disabled>Select Course</option>
        {courseOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
