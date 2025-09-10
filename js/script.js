// Accordion functionality
const accordions = document.querySelectorAll(".accordion-button");
accordions.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
  });
});
