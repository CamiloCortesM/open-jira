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
    console.log('we were already connected');
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

  await mongoose.connect(process.env.MONGO_URL || '');
  mongooConnection.isConected = 1;
  console.log('Connected to mongo db', process.env.MONGO_URL);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;
  if (!mongooConnection.isConected) return;
  await mongoose.disconnect();
  mongooConnection.isConected = 0;
  console.log('disconnected from mongo db');
};
