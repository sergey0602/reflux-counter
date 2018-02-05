import mongoose from 'mongoose';

const counterSchema = mongoose.Schema({
  count: Number
});

counterSchema.statics.findDocument = function (callback) {
  return this.find({}, callback);
};

counterSchema.statics.updateCounter = function (id, newValue, callback) {
  return this.findByIdAndUpdate(id, { $set: { count: newValue }}, { new: true }, callback);
};

export default mongoose.model('Counter', counterSchema);
