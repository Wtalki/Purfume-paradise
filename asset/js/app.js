function review() {
  let container = document.querySelector(".review_carousel");
  let next = document.querySelector(".next");
  next.addEventListener("click", function () {
    let item = document.querySelectorAll(".review_item");
    container.append(item[0]);
  });
  let prev = document.querySelector(".prev");
  prev.addEventListener("click", function () {
    let item = document.querySelectorAll(".review_item");
    container.prepend(item[item.length - 1]);
  });
}
review();
