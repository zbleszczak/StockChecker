const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync('./data/users.json'));
  
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  });


app.post('/register', (req, res) => {
  const { email, username, password } = req.body;
  const users = JSON.parse(fs.readFileSync('./data/users.json'));

  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    res.status(409).send('Username already exists');
  } else {
    const newUser = { email, username, password };
    users.push(newUser);
    fs.writeFileSync('./data/users.json', JSON.stringify(users));
    res.send('Registration successful');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});