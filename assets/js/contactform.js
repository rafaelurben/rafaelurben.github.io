function validateContactForm() {
    document.querySelector("#contact-form").classList.add("validated");
}


function submitContactForm() {
    let subject = document.querySelector("#form-contact-subject").value;
    let message = document.querySelector("#form-contact-message").value;

    // Because this is a static website, open the email client with the above message prefilled.

    let url = `mailto:dev@rafaelurben.ch?`;
    url += new URLSearchParams({
        subject: "Kontaktanfrage: " + subject,
        body: message
    }).toString()

    window.open(url);
}
