document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const name = this.name.value;
  const email = this.email.value;
  const phone = this.phone.value;
  const message = this.message.value;

  const whatsappNumber = "918974287067"; // country code + number

  const whatsappMessage = 
    `Hello Ratnadeep,%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Phone: ${phone}%0A%0A` +
    `Message:%0A${message}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
});
