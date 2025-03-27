# Type Here

A minimal, fast, and elegant text editor built with React and TypeScript. Features automatic saving and a clean interface for distraction-free writing.

## Features

- 📝 Clean, minimal text editor interface
- 💾 Automatic content saving using localStorage
- ⏰ Real-time clock with 12-hour format
- 🌍 Time display adapts to user's locale
- 🔄 Time updates every 10 seconds and on tab focus
- 📤 Export content as .txt files
- 📥 Import content from .txt files
- ✨ Cursor position preservation while typing
- 🧹 Quick "New page" feature to start fresh

## Tech Stack

- React 18
- TypeScript
- CSS Modules
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sreesreejuks/typehere.app.git
cd typehere.app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

## Usage

1. **Text Editor**:
   - Start typing in the main editor area
   - Content automatically saves as you type
   - Cursor position is preserved during edits

2. **Time Display**:
   - Shows current time in [month day, hour:minute period] format
   - Updates every 10 seconds
   - Updates when returning to the tab
   - Adapts to your local time format

3. **More Menu Options**:
   - Export as .txt: Save your content to a text file
   - Import .txt: Load content from a text file
   - New page: Clear all content and start fresh

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- [sreesreejuks](https://github.com/sreesreejuks)

## Support

If you find this project helpful, please give it a ⭐️!
