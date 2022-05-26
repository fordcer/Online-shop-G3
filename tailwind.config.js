module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'elephant': "url('../src/asset/bg-elep.jpg')"
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        topic: '#57201f',
        normalText: '#777',
        bgContact: '#511818',
        bgOtop: '#faf7f2',
        messageColor: '#80807f',
        callColor: '#FAED19'
      },
      fontFamily: {
        messageFont: ['Roboto', 'Kanit', 'sans-serif'],
        topicFont: ['Montserrat', 'Kanit', 'sans-serif'],
      },
      screens: {
        'iphone': '414px',
        'tablet': '912px',
      },
    },
    plugins: [],
  }
}; 