# Portfolio Project

A full-stack portfolio website built with React and Node.js.

## 🚀 Live Demo
[View Live Portfolio](https://your-portfolio-url.vercel.app)

## 🛠️ Tech Stack
- **Frontend**: React, Vite, TailwindCSS, Framer Motion
- **Backend**: Node.js, Express
- **Email**: EmailJS
- **Deployment**: Vercel

## 📁 Project Structure
```
├── client/          # React frontend
├── server/          # Node.js backend
└── README.md
```

## 🔧 Local Development

### Frontend (Client)
```bash
cd client
npm install
npm run dev
```

### Backend (Server)
```bash
cd server
npm install
npm run dev
```

## 🌐 Deployment
This project is deployed on Vercel with automatic deployments from the main branch.

## 📧 Contact Form
The contact form is powered by EmailJS for direct email communication.

## 👨‍💻 About
Portfolio website for Theophilus Alexander Elvan - Computer Science Student & Academic Leader.

## 🎨 Animated Background
The site uses a global animated background powered by Framer Motion. It's wrapped around the entire app in `client/src/App.jsx` via the `AnimatedBackground` component.

- Switch variants by editing `App.jsx`:
	- `variant="particles"` (default)
	- `variant="waves"`
	- `variant="geometric"`

Example:

```
<AnimatedBackground variant="particles">
	{/* content */}
</AnimatedBackground>
```

Notes:
- Sections use transparent backgrounds so the animation shows through.
- Surfaces use translucent backgrounds (e.g., `bg-gray-900/60`) to keep text readable.
- Background layers are non-interactive (`pointer-events: none`) so links and buttons remain clickable.