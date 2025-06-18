import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: String,
  surname: String,
  dob: {
    day: Number,
    month: String,
    year: Number
  },
  gender: String,
  emailOrPhone: String,
  password: String
});

const User = mongoose.model('User', userSchema);
export default User;
