import React, { useRef, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Toast } from "primereact/toast";

function AddStudent(props) {
  const toast = useRef(null);

  const initialFormData = {
    first_name: "",
    last_name: "",
    age: "",
    email: "",
    department: "",
    grade: 1,
  };
  const [formData, setFormData] = useState(initialFormData);
  const [emptyFields, setemptyFields] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleDepartmentChange = (e) => {
    setFormData({
      ...formData,
      department: e.target.value,
    });
  };
  const handleGradeChange = (e) => {
    setFormData({
      ...formData,
      grade: e,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let arr = [];
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && formData[key] === "") {
        arr.push(key);
        toast.current.show({
          severity: "error",
          summary: "Empty filed : " + key,
          life: 2000,
        });
      }
    }
    if (arr.length > 0) {
      console.log("The following fields are empty:", emptyFields);
    } else {
      setFormData(initialFormData);
      props.onChildClick(formData);
    }
  };

  return (
    <section className="student-add container">
      <Toast ref={toast} />

      <div className="section-header">
        <span>Add Student</span>
        <h2>Add Student</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="col-6">
            First name:
            <input
              name="first_name"
              className="form-control"
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>

          <label className="col-6">
            Last name:
            <input
              name="last_name"
              className="form-control"
              value={formData.last_name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="row mb-3">
          <label className="col-6">
            Email:
            <input
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label className="col-6">
            Departement:
            <select
              className="form-select"
              name="department"
              value={formData.department}
              onChange={handleDepartmentChange}
            >
              <option value=""></option>
              <option value="Science and Mathematics">
                Science and Mathematics
              </option>
              <option value="Social Sciences"> Social Sciences</option>
              <option value="Arts and Creative Studies">
                Arts and Creative Studies
              </option>
              <option value="Physical Education and Sports">
                Physical Education and Sports
              </option>
            </select>
          </label>
        </div>

        <div className="row">
          <label className="col-6 label-grade">
            Grade:
            <InputNumber
              inputId="minmax"
              onValueChange={(e) => handleGradeChange(e.value)}
              value={formData.grade}
              min={1}
              max={5}
            />
          </label>

          <label className="col-6">
            Age:
            <input
              name="age"
              className="form-control"
              value={formData.age}
              onChange={handleChange}
              type="date"
            />
          </label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
}

export default AddStudent;
