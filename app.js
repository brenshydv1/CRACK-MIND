
document.addEventListener("DOMContentLoaded", function () {

  // Start button
  const startButton = document.querySelector(".btn");

  if (startButton) {
    startButton.onclick = function () {
      alert("CRACK MIND में आपका स्वागत है! Courses जल्द शुरू होंगे।");
    };
  }

  // Course cards
  const courses = document.querySelectorAll(".card");

  courses.forEach(function (course) {
    course.style.cursor = "pointer";

    course.addEventListener("click", function () {
      const title = course.querySelector("h3");

      if (title) {
        alert(title.innerText + " : Course जल्द उपलब्ध होगा!");
      }
    });
  });

});
