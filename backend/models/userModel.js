import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
});

const Form = mongoose.model('Form', userSchema);

export default Form;

