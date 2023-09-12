const scanLogSchema = new mongoose.Schema({
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Server',
      required: true,
    },
    deviceId: {
      type: String,
      required: true,
    },
    scanTimeStamp: {
        type: Date,
        required: true,
        default: Date.now,
    },
  });
  
  const ScanLog = mongoose.model('ScanLog', scanLogSchema);
  