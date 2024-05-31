const contactButton = document.querySelector(".contact-button")
const contactModal = document.querySelector(".contact")
const closeModal = document.querySelector(".close")
const contactForm = document.querySelector(".form-contact")


contactButton?.addEventListener("click",()=>{
  contactModal?.classList.add("show")
  document.body.classList.add("no-scroll")
})

contactModal?.addEventListener("click",(e)=>{
  if(e.target === contactModal || e.target === closeModal){
    contactModal?.classList.remove("show")
  document.body.classList.remove("no-scroll")
  }
})

contactForm?.addEventListener("submit", async(event)=>{
  event.preventDefault()
  const allInformations = {
    firstname:document.querySelector("#firstname").value,
    lastname:document.querySelector("#lastname").value,
    email:document.querySelector("#email").value,
    subject:document.querySelector("#subject").value,
    message:document.querySelector("#message").value,
  }
  const response = await axios.post("...", (allInformations))
  console.log(response)
})