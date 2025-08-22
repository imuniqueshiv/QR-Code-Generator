
# 🔗 QR Code Generator CLI

A simple Node.js command-line tool that generates QR codes from URLs and saves them as image files. Built for fast, offline use with minimal dependencies.

## 🚀 Features

- Accepts URLs via terminal input
- Generates QR codes as PNG images
- Saves URLs to a log file (`urls.txt`)
- Stores QR images in a dedicated folder (`qr_codes/`)
- Lightweight and beginner-friendly

## 📦 Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/qr-code-generator-cli.git
cd qr-code-generator-cli
npm install
```

## 🛠️ Usage

Run the script using Node.js:

```bash
node index.js
```

You'll be prompted to enter a URL. The tool will:

- Save the URL to `urls.txt`
- Generate a QR code image in the `qr_codes/` folder

## 📁 Project Structure

```
qr-code-generator-cli/
├── index.js          # Main script
├── urls.txt          # Log of entered URLs
├── qr_codes/         # Folder for generated QR images
├── package.json      # Project metadata and dependencies
├── package-lock.json # Auto-generated lock file
└── README.md         # You're reading it!
```

## 🧾 Dependencies

- [`inquirer`](https://www.npmjs.com/package/inquirer) – for interactive CLI prompts
- [`qr-image`](https://www.npmjs.com/package/qr-image) – for generating QR codes

Install them via:

```bash
npm install inquirer qr-image
```

## 📌 Notes

- Make sure the `qr_codes/` folder exists before running the script, or create it dynamically in your code.
- You can customize the output format (e.g., SVG, EPS, PNG) by tweaking the `qr-image` options.


