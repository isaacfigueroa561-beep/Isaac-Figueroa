# CapitalFlow - Modern Finance Platform

A beautifully designed, modern finance platform inspired by Robinhood, Fidelity, and Meta's design philosophy. Built with vanilla HTML, CSS, and JavaScript with advanced animations and interactive features.

## 🎨 Features

### Dashboard
- **Portfolio Overview** - Real-time portfolio value visualization with animated charts
- **Quick Stats** - Key metrics including buying power, today's gains, and returns
- **Holdings List** - Your current stock positions with live price updates
- **Live Price Ticker** - Real-time price movements every 2 seconds

### Portfolio
- **Asset Allocation** - Doughnut chart showing portfolio distribution
- **Sector Distribution** - Visual breakdown by industry sectors (Technology, Healthcare, Finance, Energy)
- **Animated Progress Bars** - Smooth fill animations for sector allocations

### Markets
- **Market Indices** - S&P 500, NASDAQ, and Dow Jones live data
- **Trending Stocks** - Top performing stocks with mini spark-line charts
- **Stock Search** - Quick search functionality for stocks and ETFs
- **Mini Charts** - Inline sparkline charts for quick price trend visualization

### Trading
- **Order Form** - Place buy/sell orders with multiple order types
- **Market/Limit/Stop Loss** - Different order type options
- **Order Preview** - Real-time calculation of order costs and fees
- **Stock Details** - Detailed stock information with full-day chart and statistics

## ✨ Design Highlights

### Animations
- **Smooth Transitions** - All page transitions use fade-in animations
- **Hover Effects** - Cards lift and glow on hover with smooth transforms
- **Bounce Animations** - Stat icons bounce subtly to draw attention
- **Number Animations** - Portfolio values animate when updated
- **Slide Animations** - Elements slide in from different directions on page load
- **Chart Animations** - Charts animate data changes smoothly

### Modern UI
- **Glassmorphism Navigation** - Backdrop blur effect on navbar
- **Gradient Glows** - Subtle blue glow effects on interactive elements
- **Dark Mode Support** - Fully responsive to system dark mode preferences
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Custom Scrollbars** - Styled scrollbars matching the design system

### Performance
- **Intersection Observer** - Lazy animation triggering on scroll
- **Optimized Charts** - Chart.js for smooth, performant visualizations
- **Efficient Updates** - Minimal DOM updates for price ticker
- **Hardware Acceleration** - CSS transforms for smooth animations

## 🚀 Quick Start

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3 (for local development server)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd isaac-figueroa
```

2. Start the development server
```bash
# Using Python
python -m http.server 8000

# Or using Node.js http-server
npx http-server
```

3. Open in browser
```
http://localhost:8000
```

## 📋 Project Structure

```
.
├── index.html          # Main HTML markup
├── styles.css          # All CSS styling and animations
├── app.js              # JavaScript functionality and interactions
├── package.json        # Project metadata
└── README.md           # This file
```

## 🎯 Key Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and animations
- **JavaScript (ES6+)** - Vanilla JS for interactivity
- **Chart.js** - Data visualization library
- **System Fonts** - macOS/iOS typography stack for modern look

## 🎮 Keyboard Shortcuts

- `Ctrl+1` or `Cmd+1` - Dashboard
- `Ctrl+2` or `Cmd+2` - Portfolio
- `Ctrl+3` or `Cmd+3` - Markets
- `Ctrl+4` or `Cmd+4` - Trade

## 💡 Features in Detail

### Smart Navigation
- Click nav links or use keyboard shortcuts to switch sections
- Active nav link highlights current section
- Smooth fade transitions between sections

### Real-Time Updates
- Portfolio values animate when updated
- Live price ticker updates every 2 seconds
- Stock details update automatically

### Interactive Trading
- Select between Market, Limit, and Stop Loss orders
- Order preview calculates total cost automatically
- Buy and Sell buttons with different color schemes
- Stock detail cards update when you click holdings

### Data Visualization
- Portfolio line chart with 7-day history
- Asset allocation doughnut chart
- Sector distribution bar charts
- Stock mini charts showing trend
- Full stock detail candlestick-ready chart

## 🎨 Color Scheme

- **Primary Blue** - `#0066cc` (Interactive elements)
- **Success Green** - `#10b981` (Positive changes)
- **Warning Red** - `#ef4444` (Negative changes)
- **Accent Orange** - `#f59e0b` (Highlights)
- **Purple** - `#8b5cf6` (Alternative accent)

## 🌙 Dark Mode

The platform automatically detects system dark mode preference and applies appropriate colors. CSS variables handle the theme switching seamlessly.

## 📱 Responsive Breakpoints

- **Desktop** - 1200px+ (Full layout)
- **Tablet** - 768px - 1200px (Adjusted grid)
- **Mobile** - Below 768px (Single column)

## 🔔 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Future Enhancements

- WebSocket integration for real-time data
- Advanced charting with TradingView widgets
- Portfolio alerts and notifications
- Tax loss harvesting tools
- Options trading interface
- Cryptocurrency support
- Mobile app version

## 📄 License

MIT License - Feel free to use this project for personal and commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

---

**CapitalFlow** - Designed for modern investors. Built with care. ✨