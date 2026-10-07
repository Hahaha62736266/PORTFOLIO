# 🌸 Christian Dave Obiasada — Digital Portfolio Website

A clean, modern, professional, and fully responsive **Digital Portfolio Website** built for **Christian Dave Obiasada**, 4th-Year Bachelor of Information Technology student specializing in **Software Development** at **Torres Capitol College Inc.**

Designed with an elegant **minimalist feminine-tech aesthetic** using soft rose, lavender, and subtle purple accents on a crisp, accessible background.

---

## 📁 Project Structure

```text
PORTFOLIO/
│
├── index.html                  # Main portfolio website (HTML5 semantic structure)
├── css/
│   └── style.css               # Styling, custom color tokens, responsive layout
├── js/
│   └── script.js               # Smooth scrolling, hamburger menu, filter, form validation
├── images/
│   ├── profile.jpg             # Profile photo (with profile.png fallback)
│   ├── project1.jpg            # AgriConnect capstone preview
│   ├── project2.jpg            # Academic project preview
│   ├── project3.jpg            # Web development project preview
│   ├── project4.jpg            # Software development project preview
│   └── certificates/
│       └── certificate-sample.jpg # Certificate preview
├── cv/
│   └── Christian-Obiasada-CV.pdf  # Downloadable PDF Resume / CV
└── README.md                   # Complete documentation & editing guide
```

---

## 🎨 Design Palette & Aesthetic Tokens

| Token | Hex Code | Role |
| :--- | :--- | :--- |
| **Background** | `#FFF9FC` | Soft, ambient light canvas |
| **Primary** | `#D98CB3` | Soft blush rose (buttons, active links, glow) |
| **Secondary** | `#B79ACB` | Soft wisteria / lavender |
| **Accent** | `#8E6FAE` | Subtle violet / purple accents |
| **Text (Main)** | `#29232D` | High-contrast dark charcoal |
| **Secondary Text** | `#6F6873` | Subtitle and paragraph descriptions |
| **Cards & Modals** | `#FFFFFF` | Crisp white cards with soft shadows |

---

## ⚡ Features Included

- **100% Vanilla HTML5, CSS3, & Modern JavaScript**: Zero build steps required. Can be opened directly by double-clicking `index.html`.
- **Fully Responsive**: Mobile-first design optimized for mobile phones (320px+), tablets, and widescreen desktop monitors.
- **Sticky Glassmorphic Navigation**: Smooth backdrop blur with active ScrollSpy tracking your current section.
- **Animated Hamburger Drawer**: Mobile navigation menu that automatically closes when any link is clicked.
- **Interactive Project Filtering**: Filter projects by categories (`All`, `Capstone`, `Academic`, `Web Application`, `Software System`).
- **Interactive Modal / Lightbox**: Click "View Project" or "View Certificate" to see full details without leaving the page.
- **Client-Side Form Validation**: Real-time error highlight and instant success alert banner without requiring a complex backend.
- **Back-to-Top Button**: Smooth floating button that appears on scroll.
- **SEO & Social Ready**: Meta tags, Open Graph tags, semantic heading hierarchy, and fast loading.

---

## ✏️ How to Edit & Customize Your Portfolio

All customizable content in `index.html` is marked with clear developer comments:

### 1. Personal Information & Profile Photo
Search for `// EDIT PERSONAL INFORMATION HERE` in `index.html`:
- **Change Name**: Look for `<h1 class="hero-name">` and update the text.
- **Update Profile Photo**: Replace `images/profile.jpg` with your own image, or update the `src="images/profile.jpg"` path in `index.html`.
- **Update About Me Text**: Update the paragraphs inside `<section class="section about" id="about">`.
- **Update Info Card**: Modify your age, gender, course, year level, and graduation year in the `.info-list` table.

### 2. Education Details
Search for `<section class="section education" id="education">` in `index.html`:
- Modify the school name (`TORRES CAPITOL COLLEGE INC.`), degree, specialization, and description.

### 3. Skills & Skill Levels
Search for `// EDIT SKILLS HERE` in `index.html`:
- To change a skill name or level, adjust the text:
  ```html
  <div class="skill-item">
    <div class="skill-info">
      <span class="skill-name">JavaScript</span>
      <span class="skill-level-badge level-intermediate">Intermediate</span>
    </div>
    <div class="skill-progress-bar"><div class="skill-progress-fill" style="width: 75%;"></div></div>
  </div>
  ```
- Skill badge classes:
  - `level-proficient` (Proficient)
  - `level-intermediate` (Intermediate)
  - `level-beginner` (Beginner)
- Adjust the `style="width: XX%;"` to match the progress bar visual level.

### 4. Projects & Adding New Projects
Search for `// EDIT PROJECTS HERE` in `index.html`:
- To edit an existing project, update its title, image path (`images/projectX.jpg`), description, and tech tags.
- To add a new project, copy an `<article class="project-card">` block and adjust the `data-category` attribute (e.g. `data-category="capstone web"` or `data-category="academic"`).

### 5. Achievements & Certifications
Search for `// EDIT ACHIEVEMENTS HERE` in `index.html`:
- Update titles, descriptions, and certificate images inside `images/certificates/`.
- Replace `#` in the `Verify Link` button with your real credential URL.

### 6. Contact Information & Social Links
Search for `// EDIT CONTACT INFORMATION HERE` in `index.html`:
- Replace `[ADD EMAIL HERE]` with your actual email address (e.g., `dave.obiasada@gmail.com`).
- Replace `[ADD PHONE NUMBER HERE]` with your contact number.
- Replace `[ADD LOCATION HERE]` with your city and country (e.g., `Iloilo, Philippines`).
- In the `.social-icons-row`, change the `href="https://github.com"` to your actual GitHub, LinkedIn, and Facebook URLs.

---

## 🚀 How to Run Locally

You have multiple options to view and run your portfolio:

### Option 1: Directly in Any Web Browser (No installation needed)
Simply locate `index.html` in Windows Explorer and double-click it. It will open instantly in Google Chrome, Microsoft Edge, or Mozilla Firefox.

### Option 2: Using VS Code Live Server
1. Open the `PORTFOLIO` folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and select **"Open with Live Server"**.

### Option 3: Using Any Local HTTP Server
```bash
# Using Python:
python -m http.server 3000

# Using Node (npx serve):
npx serve .
```

---

## 🌐 Free Deployment Options

### Deploying to GitHub Pages (Recommended for Students)
1. Initialize git and commit your files:
   ```bash
   git add .
   git commit -m "feat: complete digital portfolio website"
   ```
2. Push your repository to your GitHub account:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. In GitHub, go to your repository **Settings** &rarr; **Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your portfolio will be live at `https://YOUR_USERNAME.github.io/portfolio/` within 1-2 minutes!

### Deploying to Netlify or Vercel
- Drag and drop the `PORTFOLIO` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for instant zero-config deployment.

---

## 📄 License & Attribution

Designed and developed for **Christian Dave Obiasada**.
Feel free to customize, expand, and use this portfolio for internship applications, university presentations, and career opportunities.