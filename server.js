const express = require('express');
const app = express();
const path = require('path');

const PORT =  5001;
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
