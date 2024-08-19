const modal_open_btn = document.getElementById("modal_open_btn");
const modal = document.getElementById("modal");
const modal_close_btn = document.getElementById("modal_close_btn")

modal_open_btn.onclick = (e) => {
  modal.style.opacity = 1;
  modal.style.pointerEvents = "auto";
  modal.style.transform = "translateY(0)";
};

modal_close_btn.onclick = (e) => {
    modal.style.opacity = 0;
    modal.style.pointerEvents = "none";
    modal.style.transform = "translateY(-50px)";

}