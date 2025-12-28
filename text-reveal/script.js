/* ===== SPLIT TEXT INTO WORDS ===== */
const text = document.querySelector(".hero-text");
const words = text.innerText.split(" ");

text.innerHTML = words
  .map(
    (word) => `
        <span class="word-mask">
          <span class="word">${word}</span>
        </span>
      `
  )
  .join(" ");

/* ===== GSAP PAGE LOAD ANIMATION ===== */
window.addEventListener("load", () => {
  gsap.from(".word", {
    y: 60,
    opacity: 0,
    // filter: "blur(14px)",
    rotateX: 20,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.045,
  });
});
