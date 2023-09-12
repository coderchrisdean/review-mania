const qrCodeSchema = new mongoose.Schema({
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Server',
      required: true,
    },
    imageUrl: {
      type: String, // URL or path to the QR code image
      required: true,
    },
    qrCodeText: {
        type: String, // QR code text
        required: true,
    },
  });
  
  const QRCode = mongoose.model('QRCode', qrCodeSchema);
  