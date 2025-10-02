# Michał Dziuba Portfolio Clone – Flexible Template

---

## Global Layout & Styles
- **Framework / Tech Stack:** HTML5, TailwindCSS, optional React/Next.js for dynamic rendering
- **Layout:** Single-page scroll: Hero → About → Tech Stack → Experience → Projects → Contact
- **Typography & Colors:** Inter, dark background (#0F111A), light headings, accent color (#4ADE80)
- **Responsiveness:** Mobile-first, sections stack vertically on small screens, grid layouts adjust dynamically
- **Animations:** Fade-in, hover effects, smooth scroll

---

## Header & Navigation
```html
<header class="fixed top-0 w-full flex justify-between items-center p-4 bg-dark z-50">
  <div class="logo font-bold text-xl">YourName</div>
  <nav>
    <ul class="hidden md:flex gap-6">
      <li><a href="#home" class="hover:text-green-400 transition-colors">Home</a></li>
      <li><a href="#resume" class="hover:text-green-400 transition-colors">Resume</a></li>
      <li><a href="#blog" class="hover:text-green-400 transition-colors">Blog</a></li>
    </ul>
    <div class="md:hidden cursor-pointer" id="hamburger">☰</div>
  </nav>
</header>
```
- Features: Smooth scroll, hamburger menu toggle for mobile, hover color transition.

---

## Hero Section
```html
<section id="home" class="min-h-screen flex flex-col justify-center items-center text-center px-4">
  <h1 class="text-5xl md:text-6xl font-bold text-white animate-fade-in">Building the Future, Line by Line</h1>
  <p class="mt-4 text-lg md:text-xl max-w-2xl text-gray-300 animate-fade-in delay-200">Hi, I’m [Name], a frontend & backend developer passionate about building apps.</p>
  <div class="mt-6 flex flex-col sm:flex-row gap-4 animate-fade-in delay-400">
    <a href="#projects" class="btn-primary px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition-colors">See Projects</a>
    <a href="#contact" class="btn-secondary px-6 py-3 rounded-lg border border-green-500 hover:bg-green-600 hover:text-white transition-all">Contact</a>
  </div>
</section>
```

... (The rest of the markdown content continues as in the previous blueprint) ...
