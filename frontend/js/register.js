// // checkduplicateUsername();

// async function getUserinfo() {
//   const response = await fetch("http://127.0.0.1:3000/userinfo");
//   const data = await response.json();
//   return data;
// }

// // post method
// async function register() {
//   let name = document.getElementById("name").value;
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;
//   let origin = window.location.origin;
//   let userdata = await getUserinfo();
//     let check = false;
//   if (name == "" || username == "" || password == "") {
//     alert("กรุณากรอกข้อมูลให้ครบ");
//   }else {
//     const response = await fetch("http://127.0.0.1:3000/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         username: username,
//         password: password,
//       }),
//     });
//   }
//   const data = await response.json();
//   return data;
// }

// // async function checkduplicateUsername(){
// //     const data = await getUserinfo();
// //     console.log(data);
// //     let username = document.getElementById('username').value;
// //     console.log(username);
// //     let check = false;
// //     for (let i = 0; i < data.length; i++){
// //         console.log(data[i].username);
// //         if (username === data[i].username){
// //             check = true;
// //             console.log(check);
// //             break;
// //         }
// //     }
// //     if (check == true){
// //         alert('ชื่อผู้ใช้นี้มีคนใช้แล้ว');
// //         document.getElementById('username').value = '';
// //     }
// //     else{
// //         register();
// //     }
// // }
