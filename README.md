# react-crash

A minimal React starter template powered by Vite, showcasing how to get React up and running with fast HMR, ESLint checks, and two React plugins (Babel and SWC) for optimal development experience.

---

## 🚀 Features

- **Vite Dev Server**  
  Lightning-fast development server with Hot Module Replacement (HMR).

- **Official React Plugins**

  - @vitejs/plugin-react (uses Babel for React Fast Refresh)
  - @vitejs/plugin-react-swc (uses SWC for React Fast Refresh)

- **ESLint Setup**  
  Preconfigured ESLint rules to enforce code quality in JavaScript projects.

- **TypeScript-Ready**  
  Clear path to migrate—simply add TypeScript, enable `@typescript-eslint` rules, and update file extensions.

---

## 🧰 Tech Stack

- Frontend  
  • React 18  
  • Vite

- Tooling  
  • ESLint  
  • Babel or SWC (for React Fast Refresh)

- Markup & Styles  
  • HTML  
  • CSS

---

## 📦 Installation & Usage

### 1. Clone the repo

```bash
git clone https://github.com/vistor985/react-crash.git
cd react-crash
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run in development

```bash
npm run dev
# or
yarn dev
```

Open your browser at `http://localhost:5173` to see your app with HMR.

### 4. Build for production

```bash
npm run build
# or
yarn build
```

### 5. Preview production build

```bash
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```text
react-crash
├── public
│   └── favicon.svg      # Static assets served at root
│   └── index.html       # HTML template
├── src
│   ├── App.jsx          # Root React component
│   ├── main.jsx         # App entry point (mounts to DOM)
│   └── index.css        # Global styles
├── .gitignore
├── eslint.config.js     # ESLint configuration
├── package.json
├── vite.config.js       # Vite configuration (plugins, aliases)
└── README.md
```

---

## 🔧 ESLint Configuration

The `eslint.config.js` ships with basic rules for React and modern JavaScript. To enable type-aware linting:

1. Rename files to `.tsx` / `.ts`
2. Install TypeScript and ESLint plugins:
   ```bash
   npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```
3. Extend your ESLint config with `plugin:@typescript-eslint/recommended`.

---

## 🤝 Contributing

1. Fork this repository
2. Create a branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m "feat: add new feature"`
4. Push to your branch: `git push origin feature/new-feature`
5. Open a Pull Request

Please include descriptive commit messages and update this README where necessary.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE). Feel free to use, modify, and distribute!
