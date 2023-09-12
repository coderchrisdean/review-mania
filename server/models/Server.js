const serverSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    qrCode: {
      type: String, // QR code URL or identifier
      required: true,
    },

  });
  
  const Server = mongoose.model('Server', serverSchema);
  