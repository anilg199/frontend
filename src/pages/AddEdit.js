import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  age: "",
  studentClass: "",
  rollnumber: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, age, studentClass, rollnumber } = state;

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      if (response.status === 200) {
        setState(response.data); // No need to destructure further
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      toast.error("Failed to fetch user data.");
    }
  };

  const addDetail = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/user", data);
      if (response.status === 201) {
        toast.success(response.data.message); // Backend returns success message
        navigate("/");
      }
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Failed to add user.");
    }
  };

  const updateUser = async (data, id) => {
    try {
      const response = await axios.put(`http://localhost:3000/user/${id}`, data);
      if (response.status === 200) {
        toast.success(response.data.message); // Backend returns success message
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !studentClass || !rollnumber) {
      toast.error("Please provide value in all input fields");
    } else {
      if (!id) {
        addDetail(state);
      } else {
        updateUser(state, id);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name ..."
          onChange={handleInputChange}
          value={name}
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Enter Age ..."
          onChange={handleInputChange}
          value={age}
        />

        <label htmlFor="studentClass">Class</label>
        <input
          type="number"
          id="studentClass"
          name="studentClass"
          placeholder="Enter Class ..."
          onChange={handleInputChange}
          value={studentClass}
        />

        <label htmlFor="rollnumber">Roll Number</label>
        <input
          type="text"
          id="rollnumber"
          name="rollnumber"
          placeholder="Enter Roll Number ..."
          onChange={handleInputChange}
          value={rollnumber}
        />

        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;









//Same code --------------------------


// import React, { useState, useEffect} from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import "./AddEdit.css";
// import { toast } from "react-toastify";


// const initialState = {
//   name: "",
//   age: "",
//   studentClass: "",
//   rollnumber: "",
// };

// const AddEdit = () => {
//   const [state, setState] = useState(initialState);

//   const { name, age, studentClass, rollnumber } = state;

//   const history = useNavigate();

//   const {id} =  useParams();
//   useEffect(() => {
//     if(id) {
//       getSingleUser(id);
//     }
//   }, [id])

//   const getSingleUser = async  (id) => {
//     const response = await axios.get(`http://localhost:3000/user/${id}`);
//       if (response.status === 200) {
//         setState({ ...response.data[0] });
//       }
//   };


//   const addDetail = async (data) => {
//     const response = await axios.post("http://localhost:3000/user", data);
//     if (response.status === 200) {
//       toast.success(response.data);
//     }
//   };

//   const updateUser = async (data, id) => {
//     const response = await axios.put(`http://localhost:3000/user/${id}`, data);
//     if (response.status === 200) {
//       toast.success(response.data);
//     }
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !age || !studentClass || !rollnumber) {
//       toast.error("Please provide value into each input field");
//     } else {
//       if (!id) {
//         addDetail(state);
//       } else {
//         updateUser(state, id)
//       }
//      setTimeout(() => history("/"),500);
//     }
//   };

//   const handleInputChange = (e) => {
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };

//   return (
//     <div style={{ marginTop: "100px" }}>
//       <form
//         style={{
//           margin: "auto",
//           padding: "15px",
//           maxWidth: "400px",
//           alignContent: "center",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           placeholder="Enter Name ..."
//           onChange={handleInputChange}
//           value={name}
//         />

//         <label htmlFor="age">Age</label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           placeholder="Enter Age ..."
//           onChange={handleInputChange}
//           value={age}
//         />

//         <label htmlFor="studentClass">Class</label>
//         <input
//           type="number"
//           id="studentClass"
//           name="studentClass"
//           placeholder="Enter Class ..."
//           onChange={handleInputChange}
//           value={studentClass}
//         />

//         <label htmlFor="rollnumber">Roll Number</label>
//         <input
//           type="text"
//           id="rollnumber"
//           name="rollnumber"
//           placeholder="Enter Roll no..."
//           onChange={handleInputChange}
//           value={rollnumber}
//         />

//         <input type="submit" value={id ? "update" : "Add"} />
//       </form>
//     </div>
//   );
// };

// export default AddEdit;

