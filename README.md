# Inbox with simulated AI Copilot

This is a customer service web application with AI Copilot where admin/assignee can interact with a simulated AI (“Fin AI Copilot”) for customer support, including suggested messages and animated message display.

## Live site

[https://intercom-inbox.vercel.app/](https://intercom-inbox.vercel.app/)

---

## 🏗 Core Sections

- **Chat List**: Displays available chats; auto-selects the first chat on desktop.
- **Chat Inbox**: Shows conversation history between user and AI, with animated message rendering.
- **AI Copilot**: AI Copilot to help with the response to the customer.
- **AI Response**: AI replies include extra actions (e.g., add to composer, show sources).
- **Floating button on selected text**: Floating button on selected customer message text to pass it to the AI Copilot.

---

## ✨ Enhancements

- **Responsive Design** Desktop first responsive design
- **Tailwind CSS** for fast and consistent styling
- **Framer Motion** for animations

---

## 🎨 Design Choices

- **Color palette**: white background with black text for strong contrast and clarity. Gradient background on AI Copilot
- **Typography**: Geist sans for a clean, professional look
- **Icons**: Heroicons for consistency and minimalism
- **Animations**: Framer Motion used for smooth fade and reveal effects
- **Layout**: Desktop first responsive sections.

---

## 🛠 Tech Stack

- TypeScript
- React + Next js
- Tailwind CSS
- Framer Motion
- Redux Toolkit
- Icons: Heroicons

---

## 🧪 Run Locally

#### 1. Clone the repo:

```bash
git clone https://github.com/jamshed-uddin/intercom-inbox.git
```

#### 2. Change directory

```bash
  cd intercom-inbox
```

#### 3. Install packages

```bash
npm install
```

#### 4. Run locally

```bash
npm run dev
```

## Dependencies

```json
"dependencies": {
    "@heroicons/react": "^2.2.0",
    "@reduxjs/toolkit": "^2.8.2",
    "clsx": "^2.1.1",
    "motion": "^12.12.1",
    "next": "15.3.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-redux": "^9.2.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.3.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
```
