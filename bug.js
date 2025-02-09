const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for cases where userId is not a number or not found
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    //Should return a proper 404 response
    res.send('User not found');
  }
  res.json(user);
});

app.listen(3000, () => console.log('Server listening on port 3000'));