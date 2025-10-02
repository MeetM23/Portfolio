# Fully Working Contact Form for Portfolio

This guide explains how to create a fully functional Contact Us form that sends emails directly to you. 

---

## 1️⃣ HTML Form (Tailwind Styled)
```html
<section id="contact" class="py-20 px-4 max-w-3xl mx-auto">
  <h2 class="text-3xl font-semibold mb-6 reveal" data-reveal="fade-up">Contact</h2>
  <form action="contact.php" method="POST" class="space-y-4 reveal" data-reveal="fade-in" style="--delay:120ms">
    <input type="text" name="name" placeholder="Your Name" required class="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 focus:border-green-500 outline-none" />
    <input type="email" name="email" placeholder="Your Email" required class="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 focus:border-green-500 outline-none" />
    <textarea name="message" placeholder="Message" rows="5" required class="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-white/10 focus:border-green-500 outline-none"></textarea>
    <button type="submit" class="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600">Send Message</button>
  </form>
</section>
```

---

## 2️⃣ PHP Script (`contact.php`)
```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'modasiyameet23@gmail.com'; // replace with your email
    $subject = 'New Contact Form Submission';
    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo '<p class="text-green-400">Thank you! Your message has been sent.</p>';
    } else {
        echo '<p class="text-red-400">Oops! Something went wrong. Please try again later.</p>';
    }
}
?>
```
> **Note:** For reliable email sending, configure your server with **SMTP** or use services like **Gmail SMTP, SendGrid, or Mailgun**. The default `mail()` may not work on all hosts.

---

## 3️⃣ Tailwind / Modern UI
- The form already uses **Tailwind styling** matching your dark portfolio.
- Hover effects on the submit button: `hover:bg-green-600`.
- Focus effects on inputs: `focus:border-green-500 outline-none`.

---

## 4️⃣ Optional: Using Gmail SMTP (PHPMailer)
For better reliability, you can use **PHPMailer**:
```php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'your-email@gmail.com';
$mail->Password = 'app-password'; // Use app password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 465;
$mail->setFrom($email, $name);
$mail->addAddress('your-email@gmail.com');
$mail->Subject = 'New Contact Form Submission';
$mail->Body = $message;
$mail->send();
```
> PHPMailer is more reliable than PHP `mail()` and avoids spam issues.

---

## 5️⃣ Security Tips
- Validate and sanitize all input fields.
- Use **CAPTCHA** to prevent bots.
- Limit message size and rate to avoid spam.

---

## 6️⃣ Integration Steps
1. Add the HTML form to your `index.html`. 
2. Create `contact.php` in the same folder.
3. Update your email address in the PHP script.
4. Test by submitting the form on your local server or live hosting.
5. Optionally integrate PHPMailer with SMTP for production use.

---

## ✅ Result
- Fully functional Contact Us form.
- Dark-themed, Tailwind styled, responsive.
- Sends email directly to your inbox.
- Works with both local testing and live deployment (with SMTP).