const container = document.querySelector(".container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Jane Doe",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text:
      "Lorem ipsum dolor sit.",
  },
  {
    name: "John Smith",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Rebecca Sims",
    position: "Graphic Design",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if(idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
