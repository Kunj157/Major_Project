const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259]
    }
  },
  {
    title: "Mountain View Cabin",
    description: "Cozy cabin with stunning mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.8175, 39.1911]
    }
  },
  {
    title: "Lakefront Retreat",
    description: "Peaceful lakefront property perfect for family vacations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    price: 2000,
    location: "Lake Tahoe",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968]
    }
  }
];

// Add geometry to any listings that don't have it
const listingsWithGeometry = sampleListings.map(listing => ({
  ...listing,
  geometry: listing.geometry || {
    type: "Point",
    coordinates: [0, 0]
  }
}));

module.exports = { data: listingsWithGeometry };
