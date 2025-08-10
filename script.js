// Simple client‑side script to construct a mailto link and open the user's
// default email application with the form data.
function submitForm(event) {
  event.preventDefault();
  // Gather form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const course = document.getElementById('course').value;
  const message = document.getElementById('message').value.trim();

  // Compose subject and body
  const subject = encodeURIComponent(`Course Registration – ${name}`);
  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Selected Course: ${course}`,
    `Message: ${message}`,
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));

  // Define the recipient email
  const recipient = 'inftechbm@gmail.com';

  // Construct the mailto URL
  const mailtoURL = `mailto:${recipient}?subject=${subject}&body=${body}`;

  // Open the mailto link
  window.location.href = mailtoURL;

  // Provide a fallback alert in case the user's browser prevents automatic
  // redirection to the email client.
  setTimeout(() => {
    alert(
      'If your email application did not open, please send an email to inftechbm@gmail.com with your registration details.'
    );
  }, 1000);
}