let role = "admin"; // admin / guest / xxxx
switch (role) {
  case "guset":
    console.log("guest user");

    break;

  case "admin":
    console.log("admin");
    break;
  default:
    console.log("none user");
}
////////////////////////////////
if (role === "guest") {
  console.log("guest user");
} else if (role === "admin") {
  console.log("admin");
} else {
  console.log("none user");
}
