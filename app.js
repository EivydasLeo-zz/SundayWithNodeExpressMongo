const express = require('express');

// express app
const app = express();
const PORT = 3000;

app.listen(PORT);

app.set('view engine', 'ejs');
// register view engine

app.get('/', (req, res) => {
  const blogs = [
    { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Eivydas finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
  ];
  res.render('index', { title: 'Home', blogs });
});
app.get('/about', (req, res) => {
  //res.send('<p>about page</p>');
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404 Page' });
});
