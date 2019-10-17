const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/posts', (req, res) => {
  const data = [
    {
      id: 'abcdefg1',
      title: 'Lorem Ipsum',
      content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
    },
    {
      id: 'abcdefg2',
      title: 'Ipsum Lorem',
      content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
    },
    {
      id: 'xxxxx',
      title: 'Lipsum Lipsum',
      content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
    }
  ];
  res.json(data);
});

app.listen(8000, function() {
  console.log('Server is running on port:', 8000);
});
