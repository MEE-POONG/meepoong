// import { Button } from "bootstrap";
// import React, { useState } from "react";


// export default function Formtodo() {
//   const [taskName, setTestName] = useState("");

//   const createTodo = (e) => {
//     e.preventDefault();
//     const todoRef = firebase.database().ref("Todo");
//     const todo = {
//       taskName,
//       completed: false,
//     };
//     todoRef.push(todo);
//   };

//   const handleChange = (e) => {
//     setTestName(e.target.value);
//   };
//   return (
//     <form onSubmit={createTodo}>
//       <input
//         type="text"
//         placeholder="ชื่อเรื่อง.."
//         className=""
//         value={taskName}
//         required
//         onChange={handleChange}
//       />
//       <Button></Button>
//     </form>
//   );
// }
