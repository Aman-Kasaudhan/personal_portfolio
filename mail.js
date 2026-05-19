
function generateTicketId() {
  const prefix = "TCK";
  const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();
  const timestamp = Date.now().toString().slice(-5);
  return `${prefix}-${randomPart}-${timestamp}`;
}

const ticketId=generateTicketId();



emailjs.init("P65Sn0pgB5-IP7zXN");
const popup = document.getElementById("success-popup");

document
.getElementById("contact-form")
.addEventListener("submit",function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_108t4id",
        "template_mhj9xz3",
        this
    )
    .then(()=>{
        popup.classList.add("show-popup");

        this.reset();
    })
    .catch(()=>{
        alert("Failed to Send Message");
    });

    
});
function closePopup(){

popup.classList.remove("show-popup");

}


