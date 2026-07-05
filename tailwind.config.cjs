module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '#F8F7F4',
        secondaryBg: '#EFE8DD',
        accent: '#C8A97E',
        text: '#222222',
        subtext: '#666666',
        card: '#FFFFFF',
        border: '#ECECEC',
        button: '#000000',
        buttonHover: '#EFE6D8'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Satoshi', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        premium: '0 10px 30px rgba(34,34,34,0.08)'
      },
      borderRadius: {
        lg: '12px'
      }
    }
  },
  plugins: []
};
