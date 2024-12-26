let currentData = 1;
const totalSteps = 3;

document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll("select");
  selects.forEach((select) => {
    select.addEventListener("change", function () {
      const errorMessage = this.parentElement.querySelector(".error-message");
      if (errorMessage) {
        errorMessage.textContent = "";
      }
    });
  });
});

function nextStep(currentStepId, nextStepId) {
  const currentStep = document.getElementById(currentStepId);
  const selectElement = currentStep.querySelector("select");
  const errorMessage = currentStep.querySelector(".error-message");

  if (!selectElement.value) {
    errorMessage.textContent = "Please select an option.";
    return;
  }

  errorMessage.textContent = "";
  toggleStepVisibility(currentStep, nextStepId);
  currentData++;
  updateProgressBar();
}

function backStep(currentStepId, previousStepId) {
  const currentStep = document.getElementById(currentStepId);

  toggleStepVisibility(currentStep, previousStepId);
  currentData--;
  updateProgressBar();
}

function toggleStepVisibility(currentStep, nextStepId) {
  currentStep.classList.add("hidden");
  document.getElementById(nextStepId).classList.remove("hidden");
}

function updateProgressBar() {
  const progress = (currentData / totalSteps) * 100;
  const progressBar = document.querySelector(".progress");
  progressBar.style.width = `${progress}%`;
}

function formDataGenerat() {
  const prefer = document.getElementById("prefer");
  const adventure = document.getElementById("adventure");
  const budget = document.getElementById("budget");
  let valid = true;

  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = "";
  });

  if (!budget.value) {
    document.getElementById("error-step3").textContent =
      "Please select a budget.";
    valid = false;
  }

  if (!valid) return;

  const data = {
    beach: {
      adventure: {
        low: "Go to Goa, India for budget-friendly beach adventures!",
        medium:
          "Explore Bali, Indonesia for thrilling activities and relaxation!",
        high: "Maldives offers luxury beach adventures!",
      },
      relaxation: {
        low: "Visit a peaceful coastal town nearby.",
        medium: "Relax in the Maldives with mid-range accommodations.",
        high: "Enjoy luxury resorts in Seychelles.",
      },
    },
    mountains: {
      adventure: {
        low: "Trek the Himalayas on a budget-friendly trip!",
        medium: "Explore the Rocky Mountains with comfort.",
        high: "Enjoy adventure sports in the Swiss Alps.",
      },
      relaxation: {
        low: "Visit a serene mountain village.",
        medium: "Relax in a cozy cabin in the Alps.",
        high: "Stay in a luxury mountain resort in Aspen.",
      },
    },
  };

  const result =
    data[prefer.value]?.[adventure.value]?.[budget.value] ||
    "We couldn't find a match for your preferences.";

  document.getElementById("result").textContent = result;
  document.querySelector(".form-design:not(.hidden)").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  const progressBar = document.querySelector(".progress");
  progressBar.style.width = "100%";
  progressBar.classList.add("completed");
}
