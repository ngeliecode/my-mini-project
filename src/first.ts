export function showSecondPage() {
  const enterBtn = document.querySelector("#enter") as HTMLButtonElement;
  const firstPage = document.querySelector("#firstPage") as HTMLElement;
  const secondPage = document.querySelector("#secondPage") as HTMLElement;

  if (enterBtn) {
    console.log("Enter button found");
    enterBtn.addEventListener("click", () => {
      firstPage.classList.add("hidden");
      secondPage.classList.remove("hidden");
    });
  }
}
