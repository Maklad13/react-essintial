const userData = {
  firstName: "Ahmed",
  lastName: "Maklad",
  title: "engineer",
  email: "",
  password: "",
  loggedin: false,
};

export default function User() {
  function handleClick(name) {
    userData.email = "ahmed maklad";
    userData.password = "1234";
    userData.loggedin = true;
    userData.firstName = name;
    return console.log(userData);
  }
  return (
    <div id="user">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
      <button onClick={() => handleClick("ahmed")}>Click</button>
    </div>
  );
}
