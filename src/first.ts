export function showSecondPage() {
  const enterBtn = document.querySelector("#enter") as HTMLButtonElement;

  const sun = document.querySelector(".sun") as HTMLDivElement;
  const sky = document.querySelector(".sky") as HTMLDivElement;

  const firstPage = document.querySelector("#firstPage") as HTMLElement;
  const secondPage = document.querySelector("#secondPage") as HTMLElement;

  if (enterBtn && sun && sky) {
    console.log("Enter button found");

    enterBtn.addEventListener("click", () => {
      // animation
      sun.classList.add("rise");
      sky.classList.add("morning");

      setTimeout(() => {
        firstPage.classList.add("hidden");
        secondPage.classList.remove("hidden");
      }, 2000); // Match the sun's transition duration
    });
  }
}
