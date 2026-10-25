/* Blue Ray Mystery Shopping - small progressive-enhancement scripts */
document.addEventListener("DOMContentLoaded", () => {
  // Update the copyright year without requiring edits every year.
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Mobile navigation.
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector("#site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      siteNav.classList.toggle("is-open", !isExpanded);
    });
  }

  // These forms create an email draft. They do not submit or store data on a server.
  const applicationForm = document.querySelector("#application-form");
  if (applicationForm) {
    applicationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(applicationForm);
      const name = String(data.get("fullName") || "").trim();
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const location = String(data.get("location") || "").trim();
      const country = String(data.get("country") || "").trim();
      const experience = String(data.get("experience") || "Not specified");
      const message = String(data.get("message") || "").trim();

      const subject = "Mystery Shopper Application - " + name;
      const body = [
        "Hello Blue Ray Mystery Shopping,",
        "",
        "I am interested in the Mystery Shopper opportunity.",
        "",
        "Full name: " + name,
        "Email: " + email,
        "Contact number: " + phone,
        "Location: " + location + ", " + country,
        "Experience: " + experience,
        "Additional message: " + (message || "None"),
        "",
        "Thank you."
      ].join("\n");

      const status = document.querySelector("#form-message");
      status.textContent = "Your email app should open with a draft. Review it and press Send to submit your application. If nothing opens, use the email or WhatsApp links on this page.";
      window.location.href = "mailto:jobs@blueray.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const topic = String(data.get("topic") || "").trim();
      const message = String(data.get("message") || "").trim();
      const subject = "Website enquiry: " + topic;
      const body = [
        "Hello Blue Ray Mystery Shopping,",
        "",
        "Name: " + name,
        "Email: " + email,
        "Subject: " + topic,
        "",
        message
      ].join("\n");
      const status = document.querySelector("#contact-form-message");
      status.textContent = "Your email app should open with a draft. Review the details and press Send to deliver your enquiry.";
      window.location.href = "mailto:jobs@blueray.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
});
