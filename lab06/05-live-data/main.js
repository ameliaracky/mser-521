'use strict';

// Practice basic for/while loops and conditionals.
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);

  // TODO: Print the name of the first user to the console.
  console.log(users[0].name);

  
  // TODO: Print the email of the last user to the console.
  
  console.log(users[users.length - 1].email);


  // TODO: Print the city of the user with the id of 3 to the console.
  
  console.log(users[2].address.city);


  // TODO: Print all of the first names of the users to the console.
 for (const user of users) {
  const firstName = user.name.split(" ")[0];
  console.log(firstName);
}
  

  // TODO: Print all of the first names and email of the users to the console.
  console.log('5. Print the first name and email of each user to the .container.');

const container = document.querySelector("#container");
for (const user of users) {
  
  const firstName = user.name.split(" ")[0];

  // Create a template for the user info
  const template = `
    <div>
      <p> ✉️ ${firstName} - ${user.email}</p>
    </div>
  `;

  // Append to container
  container.innerHTML += template;
}
}

getUsers();