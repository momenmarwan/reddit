const {join} = require('path');

const goHome = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'view', 'pages', 'home.html'));
};
module.exports = {goHome};
