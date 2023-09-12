const reviewSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true,
        },
    server: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Server',
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    platform: {
      type: String, // 'Yelp' or 'Google'
      required: true,
    },
    
  });
  
  const Review = mongoose.model('Review', reviewSchema);
  