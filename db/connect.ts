
import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = (uri: string) => mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

export default connectDB;
