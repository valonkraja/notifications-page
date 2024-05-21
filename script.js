const li = document.querySelectorAll(".unread");
const ul = document.querySelector("ul");
const markAsRead = document.querySelector(".mark-as-read");
const notificationNum = document.querySelector(".notification-num");

notificationNum.innerText = li.length;

ul.addEventListener("click", function (e) {
  if (!e.target.closest("li")) return;

  e.target.closest("li").classList.remove("unread");
  notificationNum.innerText = document.querySelectorAll(".unread").length;
});

markAsRead.addEventListener("click", function (e) {
  e.preventDefault();

  li.forEach((el) => el.classList.remove("unread"));

  notificationNum.innerText = 0;
});
