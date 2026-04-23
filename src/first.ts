import { showSecondPage } from "./second";

export function init() {
  const enterBtn = document.querySelector("#enter") as HTMLButtonElement;

  if (enterBtn) {
    console.log(enterBtn);
    console.log("Enter button found");
    enterBtn.addEventListener("click", () => {
      showSecondPage();
    });
  }
}
