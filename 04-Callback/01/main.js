let checkPermission = (role, roleAdmin, roleUser) => {
  if (role === "ADMIN") {
    roleAdmin();
  } else {
    roleUser();
  }
};

function admin() {
  alert("ACCESS GRANTED");
}

function user() {
  alert("ACESS DENIED");
}

checkPermission(prompt("role"), admin, user);
