# Equity Ownership Calculator

A web-based calculator for determining equity ownership percentage and basis points from stock options.

## Features

- **Real-time calculations** as you type
- **Dual ownership metrics**: Both current and fully diluted ownership
- **Basis points conversion**: Automatic conversion from percentage to basis points
- **Input validation**: Ensures all inputs are valid and logical
- **Responsive design**: Works on desktop and mobile devices
- **Clean interface**: Professional, easy-to-use design

## How to Use

1. Enter the **Number of Options** you hold
2. Enter the **Shares Authorized** (total shares the company can issue)
3. Enter the **Shares Outstanding** (shares currently issued)
4. The calculator will automatically show:
   - Current ownership percentage and basis points
   - Fully diluted ownership percentage and basis points

## Calculations

### Current Ownership
- **Ownership Percentage** = (Your Options ÷ Shares Outstanding) × 100
- **Basis Points** = Ownership Percentage × 100

### Fully Diluted Ownership
- **Fully Diluted Percentage** = (Your Options ÷ Shares Authorized) × 100
- **Fully Diluted Basis Points** = Fully Diluted Percentage × 100

## Understanding Basis Points

Basis points (bps) are a unit of measure used in finance to describe percentage changes:
- 1% = 100 basis points
- 0.5% = 50 basis points
- 0.01% = 1 basis point

## Example

If you have:
- **10,000 options**
- **10,000,000 shares authorized**
- **8,000,000 shares outstanding**

Your ownership would be:
- **Current**: 0.125% (12.5 basis points)
- **Fully Diluted**: 0.10% (10 basis points)

## Files

- `index.html` - Main HTML structure
- `styles.css` - CSS styling
- `script.js` - JavaScript calculation logic
- `README.md` - This documentation

## Running Locally

1. Clone this repository
2. Open `index.html` in a web browser, or
3. Start a local server: `python3 -m http.server 8000`
4. Navigate to `http://localhost:8000`

## Browser Compatibility

This calculator works in all modern browsers including:
- Chrome/Chromium
- Firefox
- Safari
- Edge

## License

MIT License - feel free to use and modify as needed.