# SHOP.CO - Modern E-commerce Landing Page

**SHOP.CO** is a high-performance, fully responsive e-commerce landing page. This project demonstrates advanced frontend techniques, including a custom-built touch-responsive review slider, modular SCSS architecture, and dynamic UI state management.

---

## 📸 Screenshots

| Desktop View                             | Mobile View                              |
| :--------------------------------------- | :--------------------------------------- |
| ![Desktop Preview](./screenshoot/01.jpg) | ![Mobile Preview](./screenshoot/m02.jpg) |
| ![Desktop Preview](./screenshoot/02.jpg) | ![Mobile Preview](./screenshoot/l01.jpg) |

---

## 🚀 Key Features

- **Custom Review Swiper:** A hand-coded JavaScript slider for customer testimonials featuring:
  - **Touch & Mouse Drag:** Native support for `touchstart` and `mousedown` events for a smooth user experience.
  - **Responsive Visibility:** Logic-driven adjustment of visible cards (1 to 3) based on real-time viewport width.
  - **Physics-based Interaction:** Determines slide changes based on drag distance (`movedBy > 50`) and velocity.
- **Dynamic UI Toggles:** Interactive "View All" and "Show Less" functionality for the _New Arrivals_ and _Top Selling_ sections, controlled via optimized JavaScript arrow functions.
- **Precision Responsiveness:** 10+ custom SCSS media queries ranging from mobile (**320px**) to ultra-wide monitors (**1600px+**), ensuring a pixel-perfect layout on all devices.
- **Modular Styling:** Built with **SCSS mixins** for buttons and containers, variables for theme consistency, and a mobile-first nested structure.
- **Modern Navigation:** Implementation of a **Bootstrap 5 Offcanvas** sidebar for mobile users and sleek dropdown menus for desktop browsing.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic markup for optimized SEO and accessibility.
- **SCSS:** Modular styling using mixins, variables, and nested rules.
- **JavaScript (ES6+):** Custom logic for the review swiper, window resize listeners, and UI state management.
- **Bootstrap 5:** Grid system, Offcanvas sidebar, and Dropdown components.
- **Font Awesome:** Integrated for high-quality, scalable vector icons.

---

## 📂 Project Structure

```text
├── index.html        # Main HTML structure
├── style.scss        # Source SCSS file (Logic, Mixins, Media Queries)
├── style.css         # Compiled production-ready CSS
├── style.css.map     # Source map for CSS debugging
├── index.js          # Core JS logic (Swiper, Touch events, Section toggles)
└── assets/           # Media assets (Images, Logos, Icons, and Badges)
└── screenshoot/           # Media assets (Images)
```

---

## ⚙️ Installation & Setup

Follow these steps to get a local copy of the project up and running:

1. **Clone the Repository:**

   ```bash
   git clone [https://github.com/kumawatpreetam/shop-co-landing-page.git]
   ```

2. **Run Locally:**

- Open index.html in your preferred browser. For the best experience, use the Live Server extension in VS Code.

---

## 👨‍💻 Developer Details

| Field                | Details                                                                       |
| :------------------- | :---------------------------------------------------------------------------- |
| **Role**             | Frontend Developer                                                            |
| **Technical Skills** | HTML, CSS, SCSS, JavaScript, Bootstrap, Java, and C                           |
| **GitHub**           | [github.com/kumawatpreetam](https://github.com/kumawatpreetam)                |
| **LinkedIn**         | [linkedin.com/in/kumawatpreetam](https://www.linkedin.com/in/kumawatpreetam/) |
