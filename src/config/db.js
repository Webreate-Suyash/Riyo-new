import mongoose from 'mongoose';

export const connectToDB = () => {
  let connect;
  if (process.env.DB_URL) {
    connect = mongoose.connect(process.env.DB_URL, {})
      .then(
        () => { console.log('The database is now connected...'); },
        (err) => { console.log(`Can not connect to the database${err}`); },
      );
    mongoose.set('debug', true);
  }
  return connect;
};