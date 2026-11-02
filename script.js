
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const announcement = document.querySelector(".announcement");
const closeAnnouncement = document.getElementById("closeAnnouncement");
const toast = document.getElementById("toast");

function showMessage(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showMessage.timer);
  showMessage.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");

  const isOpen = mobileMenu.classList.contains("open");
  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

closeAnnouncement.addEventListener("click", () => {
  announcement.style.display = "none";
});

document.getElementById("orderNow").addEventListener("click", () => {
  showMessage("Choose your nearest restaurant to begin your order.");
});

document.getElementById("signIn").addEventListener("click", () => {
  showMessage("Sign-in is a demo feature and is not connected to an account.");
});

document.getElementById("cart").addEventListener("click", () => {
  showMessage("Your demo shopping cart is empty.");
});

document.querySelectorAll(".food-button").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.dataset.item;
    showMessage(item + " selected! Online ordering is not connected.");
  });
});

document.getElementById("rewardsButton").addEventListener("click", () => {
  showMessage("SmashRewards sign-up is a demo feature.");
});

document.getElementById("cateringButton").addEventListener("click", () => {
  showMessage("Catering enquiries are not connected in this demo.");
});
