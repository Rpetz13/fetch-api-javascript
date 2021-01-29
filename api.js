// Ambil elemen html yang akan diisi data users
const userTable = document.getElementById("table-users");

// Fetch API

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "get",
})
  .then((response) => response.json())
  .then((response) => {
    // Validasi apakah response tidak kosong
    if (response.length > 0) {
      let tableUser = "";
      let no = 1;
      // Looping Array
      response.forEach((element) => {
        let tableSegment = `<tr>
                              <td>${no++}</td>
                              <td>${element.name}</td>
                              <td>${element.username}</td>
                              <td>${element.email}</td>
                              <td>${element.phone}</td>
                            </tr>`;
        // Increment tableUser
        tableUser += tableSegment;
      });
      // Memasukkan tableUser kedalam elemen HTML
      userTable.innerHTML = tableUser;
    } else {
      return alert("error");
    }
  });

// Async Fetch API
// async function getUsers() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     return await response.json();
//   } catch (error) {
//     alert(error);
//   }
// }

// async function renderUsers() {
//   let users = await getUsers();
//   let tableUser = "";
//   let no = 1;
//   users.forEach((element) => {
//     let tableSegment = `<tr>
//                           <td>${no++}</td>
//                           <td>${element.name}</td>
//                           <td>${element.username}</td>
//                           <td>${element.email}</td>
//                         </tr>`;

//     tableUser += tableSegment;
//   });
//   userTable.innerHTML = tableUser;
// }

// renderUsers();
