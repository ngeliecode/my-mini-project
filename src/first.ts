export function showSecondPage() {
  const enterBtn = document.querySelector("#enter") as HTMLButtonElement;
  const sun = document.querySelector(".sun") as HTMLDivElement;
  const firstPage = document.querySelector("#firstPage") as HTMLElement;
  const secondPage = document.querySelector("#secondPage") as HTMLElement;

  if (enterBtn && sun) {
    console.log("Enter button found");

    enterBtn.addEventListener("click", () => {
      firstPage.classList.add("hidden");
      secondPage.classList.remove("hidden");

      // animera solen
      sun.classList.add("rise");
    });
  }
}
