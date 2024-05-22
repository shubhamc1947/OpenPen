const blogPosts = [
  {
    id: 1,
    title: "Exploring the Wonders of Nature",
    description: "Discover the beauty of nature's landscapes and wildlife in this captivating journey.",
    imgSrc: "public/img/post/1.jpg",
    category: "Nature"
  },
  {
    id: 2,
    title: "The Art of Cooking: A Culinary Adventure",
    description: "Embark on a gastronomic journey through the flavors and aromas of world cuisine.",
    imgSrc: "public/img/post/2.jpg",
    category: "Food"
  },
  {
    id: 3,
    title: "Unraveling the Mysteries of the Cosmos",
    description: "Dive into the depths of space and unravel the secrets of the universe in this mind-bending exploration.",
    imgSrc: "public/img/post/3.jpg",
    category: "Science"
  },
  {
    id: 4,
    title: "Mastering the Craft: Tips for Creative Writing",
    description: "Unlock your creativity and hone your writing skills with these insightful tips and techniques.",
    imgSrc: "public/img/post/4.jpg",
    category: "Writing"
  },
  {
    id: 5,
    title: "Fitness and Wellness: A Journey to a Healthier You",
    description: "Embark on a transformative journey towards physical and mental well-being with expert advice and motivation.",
    imgSrc: "public/img/post/5.jpg",
    category: "Health"
  },
  {
    id: 6,
    title: "Capturing Moments: Photography Tips and Tricks",
    description: "Learn how to capture the perfect shot and unleash your creativity through the lens.",
    imgSrc: "public/img/post/6.jpg",
    category: "Photography"
  },
  {
    id: 7,
    title: "The Power of Meditation: Finding Inner Peace",
    description: "Explore the profound benefits of meditation and discover tranquility amidst life's chaos.",
    imgSrc: "public/img/post/7.jpg",
    category: "Wellness"
  },
  {
    id: 8,
    title: "Adventures in Travel: Tales from Around the Globe",
    description: "Embark on exhilarating adventures and immerse yourself in diverse cultures and landscapes.",
    imgSrc: "public/img/post/8.jpg",
    category: "Travel"
  },
  {
    id: 9,
    title: "Unlocking the Secrets of Ancient History",
    description: "Journey back in time and unravel the mysteries of ancient civilizations and cultures.",
    imgSrc: "public/img/post/9.jpg",
    category: "History"
  },
  {
    id: 10,
    title: "The World of Fashion: Trends and Style Tips",
    description: "Discover the latest fashion trends, style inspirations, and tips to elevate your wardrobe.",
    imgSrc: "public/img/post/10.jpg",
    category: "Fashion"
  },
  {
    id: 11,
    title: "Gourmet Delights: Exploring Fine Dining",
    description: "Indulge your senses in the world of gourmet cuisine and culinary excellence.",
    imgSrc: "public/img/post/11.jpg",
    category: "Food"
  },
  // Reset id to 1 and continue
  {
    id: 12,
    title: "Art and Culture: A Celebration of Creativity",
    description: "Immerse yourself in the rich tapestry of art and culture from around the world.",
    imgSrc: "public/img/post/1.jpg",
    category: "Culture"
  },
  {
    id: 13,
    title: "Innovations in Technology: Shaping the Future",
    description: "Stay ahead of the curve with insights into the latest technological advancements and innovations.",
    imgSrc: "public/img/post/2.jpg",
    category: "Technology"
  },
  {
    id: 14,
    title: "Exploring the Great Outdoors: Adventures Await",
    description: "Embark on thrilling outdoor adventures and connect with nature's wonders.",
    imgSrc: "public/img/post/3.jpg",
    category: "Adventure"
  },
  {
    id: 15,
    title: "The Joys of Parenthood: Navigating Parenthood",
    description: "Discover the joys, challenges, and lessons of parenthood in this heartwarming journey.",
    imgSrc: "public/img/post/4.jpg",
    category: "Parenting"
  },
  {
    id: 16,
    title: "Exploring the Wonders of Nature",
    description: "Discover the beauty of nature's landscapes and wildlife in this captivating journey.",
    imgSrc: "public/img/post/5.jpg",
    category: "Nature"
  },
  {
    id: 17,
    title: "The Art of Cooking: A Culinary Adventure",
    description: "Embark on a gastronomic journey through the flavors and aromas of world cuisine.",
    imgSrc: "public/img/post/6.jpg",
    category: "Food"
  },
  {
    id: 18,
    title: "Unraveling the Mysteries of the Cosmos",
    description: "Dive into the depths of space and unravel the secrets of the universe in this mind-bending exploration.",
    imgSrc: "public/img/post/7.jpg",
    category: "Science"
  },
  {
    id: 19,
    title: "Mastering the Craft: Tips for Creative Writing",
    description: "Unlock your creativity and hone your writing skills with these insightful tips and techniques.",
    imgSrc: "public/img/post/8.jpg",
    category: "Writing"
  },
  {
    id: 20,
    title: "Fitness and Wellness: A Journey to a Healthier You",
    description: "Embark on a transformative journey towards physical and mental well-being with expert advice and motivation.",
    imgSrc: "public/img/post/9.jpg",
    category: "Health"
  },
  {
    id: 21,
    title: "Capturing Moments: Photography Tips and Tricks",
    description: "Learn how to capture the perfect shot and unleash your creativity through the lens.",
    imgSrc: "public/img/post/10.jpg",
    category: "Photography"
  },
  {
    id: 22,
    title: "The Power of Meditation: Finding Inner Peace",
    description: "Explore the profound benefits of meditation and discover tranquility amidst life's chaos.",
    imgSrc: "public/img/post/11.jpg",
    category: "Wellness"
  },
  {
    id: 23,
    title: "Adventures in Travel: Tales from Around the Globe",
    description: "Embark on exhilarating adventures and immerse yourself in diverse cultures and landscapes.",
    imgSrc: "public/img/post/1.jpg",
    category: "Travel"
  },
  {
    id: 24,
    title: "Unlocking the Secrets of Ancient History",
    description: "Journey back in time and unravel the mysteries of ancient civilizations and cultures.",
    imgSrc: "public/img/post/2.jpg",
    category: "History"
  },
  {
    id: 25,
    title: "The World of Fashion: Trends and Style Tips",
    description: "Discover the latest fashion trends, style inspirations, and tips to elevate your wardrobe.",
    imgSrc: "public/img/post/3.jpg",
    category: "Fashion"
  },
  {
    id: 26,
    title: "Gourmet Delights: Exploring Fine Dining",
    description: "Indulge your senses in the world of gourmet cuisine and culinary excellence.",
    imgSrc: "public/img/post/4.jpg",
    category: "Food"
  },
  {
    id: 27,
    title: "Art and Culture: A Celebration of Creativity",
    description: "Immerse yourself in the rich tapestry of art and culture from around the world.",
    imgSrc: "public/img/post/5.jpg",
    category: "Culture"
  },
  {
    id: 28,
    title: "Innovations in Technology: Shaping the Future",
    description: "Stay ahead of the curve with insights into the latest technological advancements and innovations.",
    imgSrc: "public/img/post/6.jpg",
    category: "Technology"
  },
  {
    id: 29,
    title: "Exploring the Great Outdoors: Adventures Await",
    description: "Embark on thrilling outdoor adventures and connect with nature's wonders.",
    imgSrc: "public/img/post/7.jpg",
    category: "Adventure"
  },
  {
    id: 30,
    title: "The Joys of Parenthood: Navigating Parenthood",
    description: "Discover the joys, challenges, and lessons of parenthood in this heartwarming journey.",
    imgSrc: "public/img/post/8.jpg",
    category: "Parenting"
  },
  // Continue adding posts in the same pattern
];

export default blogPosts;