let cards = document.querySelector(".maincard");
let collegediv = document.querySelector(".colleges")
let collegecourse = document.querySelector(".divOfcourses")

window.addEventListener("scroll", function () {
  let content = document.querySelector("nav");
  let scrollPosition = window.scrollY;

  if (scrollPosition >= (20 * window.innerHeight) / 100) {
    // when scrolled 10vh
    content.style.backgroundColor = "#e1dfdf"; // change background color
  }
  else if (scrollPosition <= (20 * window.innerHeight) / 100) {
    // when scrolled 10vh
    content.style.backgroundColor = "#00000000"; 
  }
});
window.addEventListener("scroll", function () {
  let content = document.querySelector("body");
  let scrollPosition = window.scrollY;

  if (scrollPosition >= (20 * window.innerHeight) / 100) {
    // when scrolled 10vh
    content.style.backgroundColor = "#fff"; // change background color
  }
  else if (scrollPosition <= (20 * window.innerHeight) / 100) {
    // when scrolled 10vh
    content.style.backgroundColor = "#00000000"; 
  }
});
// console.log(collegediv.innerHTML)

items.forEach((item) => {
  cards.innerHTML += `<div class="card my-card">
  <img src= ${item.picture}alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${item.heading}</h5>
    <p class="card-text">${item.content}</p>
  </div>
 </div>`;
});


colleges.forEach(college =>{
    collegediv.innerHTML +=`<div class="college">
    <div class="college-photo-rapper">
    <div class="College-photo" style="background-image: url(${college.picture});">
    </div></div>
    <h3>${college.name}</h3>
    <button type="button" class="btn btn-warning">APPLY NOW</button>
  </div>`
})

// console.log(collegecourse.innerHTML);
courses.forEach(course=>{
  collegecourse.innerHTML += ` <span class="course-span">
  <input type="checkbox" id="myCheckbox" value="checked">
  <h3>${course.name}</h3>
</span>`
})