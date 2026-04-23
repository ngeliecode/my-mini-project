const firstPage = document.querySelector("#firstPage") as HTMLElement;
const secondPage = document.querySelector("#secondPage") as HTMLElement;

export function showSecondPage() {
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
}
