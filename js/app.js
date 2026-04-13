function consult(){
  alert("Email Received!. Looking Forward to speaking with you!");
}

// const links = document.querySelectorAll('.nav-links li a');
//
// links.forEach(link => {
//   link.addEventListener('click', function () {
//     links.forEach(item => item.classList.remove('active'));
//     this.classList.add('active');
//   });
// });

const searchText = document.getElementById("searchText");
const submitFetchButton = document.getElementById("fetchSubmit");

const pages = {
  home: "./index.html",
  dog: "./dog.html",
  dogs: "./dog.html",
  cat: "./cat.html",
  cats: "./cat.html",
  fish: "./fish.html",
  about: "./about.html",
  consult: "./consultation.html",
  contact: "./consultation.html",
  consultation: "./consultation.html"
};


submitFetchButton.addEventListener("click", function fetchSubmit (event) {
  event.preventDefault();

  const value = searchText.value.toLowerCase().trim();
  const page = pages[value];

  if (page) {
    window.location.href = page;
  } else {
    alert("Page not found");
  }
});


// const searchText = document.getElementById("searchText");
// const submitFetchButton = document.getElementById("fetchSubmit");
//
// function searchItem(nameSearch) {
//   const value = nameSearch.toLowerCase().trim();
//
//   if (value === "dog" || value === "dogs") {
//     window.location.href = "./dog.html";
//   } else if (value === "cat" || value === "cats") {
//     window.location.href = "./cat.html";
//   } else if (value === "fish") {
//     window.location.href = "./fish.html";
//   } else if (value === "about") {
//     window.location.href = "./about.html";
//   } else if (value === "consultation") {
//     window.location.href = "./consultation.html";
//   } else if (value === "home") {
//     window.location.href = "./index.html";
//   } else {
//     alert("Page not found");
//   }
// }
//
// function fetchSubmit(event) {
//   event.preventDefault();
//   const searchValue = searchText.value.trim();
//   searchItem(searchValue);
// }
//
// submitFetchButton.addEventListener("click", fetchSubmit);
