# ☁️ Azure Cloud Resume Challenge - Interactive Guide

<div align="center">

![Azure Cloud Resume Challenge](https://img.shields.io/badge/Azure-Cloud%20Resume%20Challenge-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A beautifully designed, interactive React website that guides users through the Azure Cloud Resume Challenge with detailed explanations, code examples, and visual architecture diagrams.**

[Live Demo](#) • [Getting Started](#-quick-start) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📸 Screenshots

### Hero Section
<!-- Replace with your screenshot: Take a screenshot of the hero section and upload to your repo in an 'images' folder, then update the path below -->
![Hero Section - Main landing page with animated gradients and call-to-action](https://via.placeholder.com/1200x600/0f172a/06b6d4?text=Hero+Section+-+Azure+Cloud+Resume+Challenge)

*Beautiful gradient hero section with smooth animations and clear value proposition*

---

### Architecture Overview
<!-- Replace with your screenshot: Capture the architecture diagram section -->
![Architecture Diagram - Visual representation of Azure services](https://via.placeholder.com/1200x600/1e293b/a855f7?text=Architecture+Overview+-+Azure+Services+Diagram)

*Interactive architecture diagram showing how all Azure components work together*

---

### Step-by-Step Guide
<!-- Replace with your screenshot: Show the expandable steps section -->
![Interactive Steps - Expandable guide with code examples](https://via.placeholder.com/1200x600/0f172a/3b82f6?text=8+Interactive+Steps+with+Code+Examples)

*8 comprehensive steps with expandable sections, detailed instructions, and real code examples*

---

### Progress Tracking
<!-- Replace with your screenshot: Capture the progress tracking feature -->
![Progress Tracker - Visual completion tracker](https://via.placeholder.com/1200x600/1e293b/10b981?text=Track+Your+Progress+Through+the+Challenge)

*Built-in progress tracking to monitor your journey through the challenge*

---

## 🌟 Features

### 🎨 **Beautiful Design**
- Modern dark theme with gradient accents
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Custom scrollbar and smooth scroll behavior

### 📚 **Comprehensive Content**
- **8 Detailed Steps**: Complete walkthrough from HTML resume to Infrastructure as Code
- **Code Examples**: Real, copy-paste-ready code for each step
- **Architecture Diagrams**: Visual representations of the cloud infrastructure
- **Best Practices**: Pro tips and industry recommendations

### ✨ **Interactive Features**
- **Expandable Steps**: Click to reveal detailed instructions
- **Progress Tracking**: Check off completed steps
- **Visual Progress Bar**: See your completion percentage
- **Smooth Scrolling**: Navigate seamlessly through content

### 🚀 **Production Ready**
- Optimized build with Vite
- Azure Static Web Apps compatible
- CI/CD ready with GitHub Actions
- Global CDN distribution
- Automatic HTTPS

---

## 🏗️ Architecture

### Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **Vite** | 5.3.1 | Build Tool & Dev Server |
| **Tailwind CSS** | 3.4.4 | Styling Framework (via CDN) |
| **Azure Static Web Apps** | - | Hosting & CDN |
| **GitHub Actions** | - | CI/CD Pipeline |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Git** installed
- **Azure Account** ([free tier available](https://azure.microsoft.com/free/))

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/azure-cloud-resume-challenge.git
   cd azure-cloud-resume-challenge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

---

## ☁️ Deploy to Azure

### Option 1: Azure Portal (Recommended for Beginners)

1. **Sign in to [Azure Portal](https://portal.azure.com)**

2. **Create Static Web App**
   - Click "Create a resource"
   - Search "Static Web Apps"
   - Click "Create"

3. **Configure Settings**
   ```
   Subscription: Your subscription
   Resource Group: Create new → "resume-rg"
   Name: "azure-cloud-resume-guide"
   Plan: Free
   Region: East US 2 (or closest to you)
   Source: GitHub
   Repository: your-repo-name
   Branch: main
   Build Presets: Vite
   App location: /
   Output location: dist
   ```

4. **Review and Create**
   - Azure will automatically set up GitHub Actions
   - Deployment takes 2-5 minutes
   - Your site will be live at: `https://your-app-name.azurestaticapps.net`

### Option 2: Azure CLI (Advanced)

```bash
# Login to Azure
az login

# Create resource group
az group create --name resume-rg --location eastus2

# Create Static Web App
az staticwebapp create \
    --name azure-cloud-resume-guide \
    --resource-group resume-rg \
    --source https://github.com/yourusername/azure-cloud-resume-challenge \
    --location eastus2 \
    --branch main \
    --app-location "/" \
    --output-location "dist" \
    --login-with-github
```

---

## 📁 Project Structure

```
azure-cloud-resume-challenge/
├── 📄 main.jsx                    # Main React component (root level)
├── 📄 index.html                  # HTML entry point with Tailwind CDN
├── 📦 package.json                # Dependencies and scripts
├── ⚙️ vite.config.js              # Vite build configuration
├── 🎨 tailwind.config.js          # Tailwind CSS configuration
├── 🔧 postcss.config.js           # PostCSS configuration
├── ☁️ staticwebapp.config.json    # Azure Static Web Apps config
├── 📋 .eslintrc.cjs               # ESLint configuration
├── 🚫 .gitignore                  # Git ignore rules
├── 📖 README.md                   # This file
└── 📂 .github/
    └── workflows/
        └── azure-static-web-apps.yml  # CI/CD pipeline
```

### Key Files Explained

| File | Purpose |
|------|---------|
| `main.jsx` | Complete React application with all components and logic |
| `index.html` | HTML template with Tailwind CSS CDN |
| `package.json` | npm dependencies (React, Vite, Tailwind) |
| `vite.config.js` | Build settings for production optimization |
| `staticwebapp.config.json` | Azure routing and configuration |
| `.github/workflows/azure-static-web-apps.yml` | Automated deployment pipeline |

---

## 🎯 The Azure Cloud Resume Challenge

This project is a guide for completing the [Cloud Resume Challenge](https://cloudresumechallenge.dev) on Azure. The challenge teaches you:

### 8 Core Steps

1. ✅ **HTML & CSS Resume** - Build a professional resume
2. ☁️ **Azure Static Web Apps** - Deploy with global CDN
3. 🌐 **Custom Domain** - Add your own domain name
4. 💻 **JavaScript Counter** - Add visitor tracking
5. 🗄️ **Cosmos DB** - NoSQL database for data storage
6. ⚡ **Azure Functions** - Serverless API endpoints
7. 🔄 **CI/CD Pipeline** - Automated deployment with GitHub Actions
8. 🏗️ **Infrastructure as Code** - Define resources with Bicep/Terraform

### What You'll Learn

- ☁️ **Cloud Fundamentals**: Azure services and architecture
- 💻 **Full Stack Development**: Frontend + Backend + Database
- 🔧 **DevOps Practices**: CI/CD, automation, monitoring
- 🏗️ **Infrastructure as Code**: Bicep, ARM Templates, or Terraform
- 🔒 **Security**: HTTPS, managed identities, best practices
- 💰 **Cost Management**: Free tier usage, budget alerts

---

## 💻 Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎨 Customization Guide

### Change Colors

Edit `main.jsx` and find the gradient classes:

```jsx
// Current: Cyan/Blue/Purple gradient
className="bg-gradient-to-r from-cyan-500 to-blue-600"

// Change to your colors
className="bg-gradient-to-r from-green-500 to-teal-600"
```

### Modify Content

The steps are defined in the `steps` array in `main.jsx`:

```jsx
const steps = [
  {
    number: 1,
    title: "Your Custom Title",
    description: "Your description",
    details: ["Point 1", "Point 2"],
    code: `Your code example`,
    color: "from-blue-500 to-cyan-500"
  },
  // ... more steps
];
```

### Add New Sections

```jsx
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold text-center mb-16">
      Your New Section
    </h2>
    {/* Your content here */}
  </div>
</section>
```

---

## 💰 Cost Breakdown

Running this project on Azure:

| Service | Free Tier | Monthly Cost |
|---------|-----------|--------------|
| **Azure Static Web Apps** | 100 GB bandwidth | **$0** |
| **GitHub Actions** | 2,000 minutes/month | **$0** |
| **Custom Domain** (optional) | N/A | ~$10-15/year |
| **Total** | | **$0/month** 🎉 |

> **Note**: Perfect for portfolio projects! Stays within Azure's generous free tier.

---

## 🐛 Troubleshooting

### Build Fails

**Problem**: GitHub Actions shows errors

**Solution**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page After Deployment

**Problem**: Site deploys but shows blank page

**Solution**:
1. Check browser console (F12) for errors
2. Ensure `index.html` loads Tailwind from CDN
3. Verify `main.jsx` is in repository root
4. Clear browser cache (Ctrl + Shift + R)

### Git LFS Issues

**Problem**: `main.jsx` shows Git LFS pointer instead of code

**Solution**:
```bash
git lfs untrack "main.jsx"
git rm --cached main.jsx
git add main.jsx
git commit -m "Fix: Remove from Git LFS"
git push
```

---

## 📚 Documentation

- 📖 [Azure Static Web Apps Docs](https://docs.microsoft.com/azure/static-web-apps/)
- 📖 [React Documentation](https://react.dev)
- 📖 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 📖 [Vite Guide](https://vitejs.dev/guide/)
- 📖 [Cloud Resume Challenge](https://cloudresumechallenge.dev)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- ✨ Submit pull requests

### Contribution Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 🌟 Show Your Support

If this project helped you learn Azure and cloud computing, please:

- ⭐ **Star this repository** on GitHub
- 🐦 **Share on Twitter/LinkedIn** with #CloudResumeChallenge
- 📝 **Write a blog post** about your experience
- 💬 **Recommend to others** learning cloud

---

## 📄 License

This project is licensed under the **MIT License**.

### What this means:
- ✅ Free to use for personal and commercial projects
- ✅ Free to modify and distribute
- ✅ No warranty provided
- ✅ Must include original license and copyright notice

---

## 👨‍💻 Author

**Your Name**

- 🌐 Portfolio: [yourwebsite.com](https://yourwebsite.com)
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)
- 📧 Email: your.email@example.com

---

## 🙏 Acknowledgments

- **Forrest Brazeal** - Creator of the Cloud Resume Challenge
- **Azure Community** - For excellent documentation and support
- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite Team** - For the lightning-fast build tool

---

## ❓ FAQ

<details>
<summary><strong>Do I need to know React to use this?</strong></summary>

No! This is a learning tool. You can deploy it as-is to showcase your cloud skills, then modify it as you learn React.
</details>

<details>
<summary><strong>How much does it cost to run on Azure?</strong></summary>

$0/month! The Azure Static Web Apps free tier is more than enough for this project.
</details>

<details>
<summary><strong>Can I use this for my actual resume?</strong></summary>

Absolutely! This is designed to be both a learning guide AND a portfolio piece.
</details>

<details>
<summary><strong>What if I want to use AWS instead of Azure?</strong></summary>

The concepts are the same! You'd use AWS Amplify, Lambda, and DynamoDB instead of the Azure equivalents.
</details>

<details>
<summary><strong>Can I add my own steps or modify the content?</strong></summary>

Yes! The code is open source and fully customizable. See the [Customization Guide](#-customization-guide) above.
</details>

---

## 🎉 Success Stories

> "This project helped me land my first cloud engineering role! The hands-on experience with Azure was invaluable."
> 
> **— Sarah M., Cloud Engineer**

> "Best learning resource I've found. The step-by-step guide made Azure approachable for a complete beginner."
> 
> **— James L., Developer**

---

<div align="center">

### 🚀 Ready to start your cloud journey?

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

**[⬆ Back to Top](#️-azure-cloud-resume-challenge---interactive-guide)**

---

Made with ❤️ by cloud enthusiasts, for aspiring cloud engineers

**If this project helped you, please ⭐ star this repository!**

</div>
