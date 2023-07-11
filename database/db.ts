import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongooConnection = {
  isConected: 0,
};

export const connect = async () => {
  if (mongooConnection.isConected) {
    console.log('we are already connected');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConnection.isConected = mongoose.connections[0].readyState;
    if (mongooConnection.isConected === 1) {
      console.log('using previous connection');
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect('....');
  mongooConnection.isConected = 1;
  console.log('Connected to mongo db', '....');
};

export const disconnect = async () => {
  await mongoose.disconnect();
  console.log('disconnected from mongo db');
};
