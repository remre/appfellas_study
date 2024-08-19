const app = require('./app');
const mongoose = require('mongoose');
const { fetchDestinationByIATA } = require('./services/destinationService');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected');
    await fetchDestinationByIATA();
  })
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
