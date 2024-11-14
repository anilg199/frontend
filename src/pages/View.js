import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

const View = () => {
  const [user, setUser] = useState(null);
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
        setUser(response.data); // Update to directly use response.data as it is already an object
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Student Details</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />

          <strong>Name: </strong>
          <span>{user?.name || "N/A"}</span>
          <br />
          <br />

          <strong>Age: </strong>
          <span>{user?.age || "N/A"}</span>
          <br />
          <br />

          <strong>Class: </strong>
          <span>{user?.studentClass || "N/A"}</span>
          <br />
          <br />

          <strong>Roll Number: </strong>
          <span>{user?.rollnumber || "N/A"}</span>
          <br />
          <br />

          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;

























// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import "./View.css";

// const View = () => {
//   const [user, setUser] = useState(null);

//   const { id } = useParams();

//   useEffect(() => {
//     if (id) {
//       getSingleUser(id);
//     }
//   }, [id]);

//   const getSingleUser = async (id) => {
//     const response = await axios.get(`http://localhost:3000/user/${id}`);
//     if (response.status === 200) {
//       setUser({ ...response.data[0] });
//     }
//   };

//   return (
//     <div style={{ marginTop: "150px" }}>
//      <div className="card">
//       <div className="card-header">
//         <p>Student Details </p>
//       </div>
//       <div className="container">
//         <strong>ID: </strong>
//         <span>{id}</span>
//         <br />
//         <br />

//         <strong>Name: </strong>
//         <span>{user && user.name}</span>
//         <br />
//         <br />

//         <strong>Age: </strong>
//         <span>{user && user.age}</span>
//         <br />
//         <br />

//         <strong>Class: </strong>
//         <span>{user && user.studentClass}</span>
//         <br />
//         <br />
//         <strong>Roll Number: </strong>
//         <span>{user && user.rollnumber}</span>
//         <br />
//         <br />
//       <Link to="/">
//       <button className="btn btn-edit">Go Back</button>
//       </Link>
//       </div>
//      </div>
//     </div>
//   );
// };

// export default View
