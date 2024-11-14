import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      if (response.status === 200) {
        setData(response.data); // Set the data received from the backend
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch users.");
    }
  };

  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure that you want to delete this user?")) {
      try {
        const response = await axios.delete(`http://localhost:3000/user/${id}`);
        if (response.status === 200) {
          toast.success(response.data.message); // Handle success message from backend
          getUsers(); // Refresh the user list
        }
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error("Failed to delete user.");
      }
    }
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Age</th>
            <th style={{ textAlign: "center" }}>Class</th>
            <th style={{ textAlign: "center" }}>Roll No.</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.studentClass}</td>
                <td>{item.rollnumber}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => onDeleteUser(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;



























// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getUsers();
//   }, []);

//   const getUsers = async () => {
//     const responce = await axios.get("http://localhost:3000/users");
//     if (responce.status === 200) {
//       setData(responce.data);
//     }
//   };

//   const onDeleteUser = async (id) => {
//     if (
//       window.confirm("Are you sure that you wanted to delete that user record")
//     ) {
//       const response = await axios.delete(`http://localhost:3000/user/${id}`);


//       if (response.status === 200) {
//         toast.success(response.data);
//         getUsers();
//       }
//     }
//   };

//   console.log("data=>", data);

//   return (
//     <div style={{ marginTop: "150px" }}>
//       <table className="styled-table">
//         <thead>
//           <tr>
//             <th style={{ textAlign: "center" }}>No.</th>
//             <th style={{ textAlign: "center" }}>Name</th>
//             <th style={{ textAlign: "center" }}>Age</th>
//             <th style={{ textAlign: "center" }}>Class</th>
//             <th style={{ textAlign: "center" }}>Roll No.</th>
//             <th style={{ textAlign: "center" }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data &&
//             data.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{item.name}</td>
//                   <td>{item.age}</td>
//                   <td>{item.studentClass}</td>
//                   <td>{item.rollnumber}</td>

//                   <td>
//                     <Link to={`/update/${item.id}`}>
//                       <button className="btn btn-edit">Edit</button>
//                     </Link>
//                     <button
//                       className="btn btn-delete"
//                       onClick={() => onDeleteUser(item.id)}
//                     >
//                       Delete
//                     </button>
//                     <Link to={`/view/${item.id}`}>
//                       <button className="btn btn-view">View</button>
//                     </Link>
//                   </td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Home;
