//local storage, window.localstorage   --key,value pairs like object
const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");
console.log(storeBtn, retrieveBtn);
const userId = "123";
const user = {
  id: 1,
  name: "my Name",
  major: "Computer Engineer",
  courses: ["js", "nodejs", "sql", "TypeScript"],
};
storeBtn.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrieveBtn.addEventListener("click", () => {
  const result = localStorage.getItem("uid");
  if (result) {
    console.log("get the id" + result);
  } else {
    console.log("could not find id ");
  }
});
