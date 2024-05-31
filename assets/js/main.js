const contactButton = document.querySelector(".contact-button");
const contactModal = document.querySelector(".contact");
const closeModal = document.querySelector(".close");
const contactForm = document.querySelector(".form-contact");
const messageResponse = document.querySelector(".message-response");

contactButton?.addEventListener("click", () => {
  contactModal?.classList.add("show");
  document.body.classList.add("no-scroll");
});

contactModal?.addEventListener("click", (e) => {
  if (e.target === contactModal || e.target === closeModal) {
    contactModal?.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
});

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const allInformations = {
    firstname: document.querySelector("#firstname").value,
    lastname: document.querySelector("#lastname").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

  try {
    const { firstname, lastname, email, subject, message } = allInformations;
    if (!firstname || !lastname || !email || !subject || !message) {
      messageResponse?.classList.add("error-message");
      messageResponse.innerHTML = "Tous les champs doivent être remplis !";
      return;
    }
    await axios.post(
      "https://site--backend-tripadvisor--j7d4wbg742nf.code.run/send-email",
      allInformations
    );
    messageResponse?.classList.remove("error-message");

    messageResponse?.classList.add("success-message");
    messageResponse.innerHTML = "Message envoyé avec succès !";
  } catch (error) {
    messageResponse?.classList.add("error-message");
    messageResponse.innerHTML =
      "Votre message n'a pas pu être délivré, suite à une erreur serveur, ré-essayez dans quelques instants.";
  }
});
