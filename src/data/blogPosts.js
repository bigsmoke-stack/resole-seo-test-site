const basePosts = [
  {
    title: 'How to Clean Sneakers the Right Way',
    slug: 'how-to-clean-sneakers',
    metaDescription:
      'Learn a simple step-by-step routine to safely clean your sneakers without damaging the materials.',
    brandFocus: 'General'
  },
  {
    title: 'Best Running Shoes on a Budget',
    slug: 'best-running-shoes-on-a-budget',
    metaDescription:
      'Discover affordable running shoes that still deliver cushioning, support and durability.',
    brandFocus: 'General'
  },
  {
    title: 'Why Buy Second Hand Shoes',
    slug: 'why-buy-second-hand-shoes',
    metaDescription:
      'Explore the financial and environmental benefits of buying quality second hand sneakers.',
    brandFocus: 'General'
  },
  {
    title: 'Sneaker Care Guide for Everyday Wear',
    slug: 'sneaker-care-guide',
    metaDescription:
      'Keep your sneakers looking fresh with this full care guide covering storage, cleaning and protection.',
    brandFocus: 'General'
  },
  {
    title: 'How to Spot Fake Sneakers',
    slug: 'how-to-spot-fake-sneakers',
    metaDescription:
      'Avoid counterfeits with this checklist for authenticating popular sneaker models.',
    brandFocus: 'General'
  },
  {
    title: 'Best Nike Shoes for Running',
    slug: 'best-nike-shoes-for-running',
    metaDescription:
      'From the Pegasus to the Vaporfly, see which used Nike running shoes are worth hunting for.',
    brandFocus: 'Nike'
  },
  {
    title: 'Adidas vs Nike: Which Is Better for You?',
    slug: 'adidas-vs-nike-comparison',
    metaDescription:
      'Compare Nike and Adidas sneakers across comfort, style, sizing and resale value.',
    brandFocus: 'General'
  },
  {
    title: 'Sustainable Fashion: Why Second Hand Sneakers Matter',
    slug: 'sustainable-fashion-guide',
    metaDescription:
      'See how second hand sneakers reduce waste and help you build a more sustainable wardrobe.',
    brandFocus: 'General'
  },
  {
    title: 'How to Restore Old Shoes and Make Them Look New',
    slug: 'how-to-restore-old-shoes',
    metaDescription:
      'Step-by-step restoration tips for bringing yellowed, scuffed sneakers back to life.',
    brandFocus: 'General'
  },
  {
    title: 'Best Gym Shoes for Lifting and Training',
    slug: 'best-gym-shoes',
    metaDescription:
      'Find stable, supportive used sneakers that are perfect for strength training and crossfit.',
    brandFocus: 'General'
  },
  {
    title: 'Top Nike Air Max Colorways to Look For Second Hand',
    slug: 'top-nike-air-max-colorways',
    metaDescription:
      'A guide to classic and underrated Nike Air Max colorways that still turn heads.',
    brandFocus: 'Nike'
  },
  {
    title: 'How to Break In Used Sneakers Comfortably',
    slug: 'how-to-break-in-used-sneakers',
    metaDescription:
      'Make second hand sneakers fit perfectly with these gentle break-in techniques.',
    brandFocus: 'General'
  },
  {
    title: 'Best Adidas Ultraboost Alternatives Under $100',
    slug: 'adidas-ultraboost-budget-alternatives',
    metaDescription:
      'Save money with second hand Ultraboost and similar high-cushion running shoes.',
    brandFocus: 'Adidas'
  },
  {
    title: 'How to Store Sneakers to Prevent Yellowing',
    slug: 'how-to-store-sneakers',
    metaDescription:
      'Protect your sneaker collection from yellowing and cracking with proper storage.',
    brandFocus: 'General'
  },
  {
    title: 'Puma Running Shoes Worth Buying Used',
    slug: 'puma-running-shoes-used',
    metaDescription:
      'Which Puma performance models hold up best when bought second hand?',
    brandFocus: 'Puma'
  },
  {
    title: 'New Balance Classics That Always Resell Well',
    slug: 'new-balance-classics-resale',
    metaDescription:
      'From the 990 to the 574, explore New Balance icons that are great second hand buys.',
    brandFocus: 'New Balance'
  },
  {
    title: 'How to Disinfect Second Hand Sneakers Safely',
    slug: 'how-to-disinfect-second-hand-sneakers',
    metaDescription:
      'Sanitize and freshen used sneakers with safe methods that protect materials.',
    brandFocus: 'General'
  },
  {
    title: 'Beginner’s Guide to Sneaker Terminology',
    slug: 'beginners-guide-to-sneaker-terminology',
    metaDescription:
      'From uppers to outsoles, learn the common sneaker terms every buyer should know.',
    brandFocus: 'General'
  },
  {
    title: 'How to Photograph Sneakers for Resale',
    slug: 'how-to-photograph-sneakers-for-resale',
    metaDescription:
      'Take clean, detailed photos that help your second hand sneakers sell faster.',
    brandFocus: 'General'
  },
  {
    title: 'Signs You Found a Great Second Hand Sneaker Deal',
    slug: 'signs-of-a-great-second-hand-sneaker-deal',
    metaDescription:
      'Condition, price and rarity indicators that show you found a steal.',
    brandFocus: 'General'
  }
];

const extraTopics = [
  'Summer Sneaker Styling Tips',
  'Winter Sneaker Care Checklist',
  'How to Choose Everyday Sneakers',
  'Best White Sneakers to Buy Used',
  'Rotating Your Sneakers to Extend Their Life',
  'How to Read Sneaker Size Charts',
  'Breaking In Running Shoes Without Blisters',
  'Finding Wide Fit Sneakers Second Hand',
  'Are Minimalist Running Shoes Right for You?',
  'Best Travel Sneakers for Long Days Walking',
  'How to Sell Your Sneakers Online',
  'Cleaning Suede and Nubuck Sneakers',
  'Protecting Sneakers with Repellent Sprays',
  'Organizing a Small Sneaker Collection',
  'Budget-Friendly Sneaker Rotation Ideas',
  'How Often Should You Replace Running Shoes?',
  'Signs Your Sneakers Need New Insoles',
  'Fixing Squeaky Sneaker Soles',
  'Best Socks to Wear with Sneakers',
  'Why Retro Sneakers Are Back in Style',
  'Collecting Limited Edition Sneakers on a Budget',
  'Top Mistakes When Buying Used Sneakers',
  'How to Read Sneaker Condition Grades',
  'Caring for Leather vs Mesh Sneakers',
  'How to Deodorize Smelly Sneakers',
  'What to Look For in Gym Sneakers',
  'Styling High Top vs Low Top Sneakers',
  'Choosing Sneakers for Standing All Day',
  'How to Track Your Sneaker Wear Mileage',
  'Running vs Training Shoes: Key Differences'
];

function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export const blogPosts = [
  ...basePosts.map((post) => ({
    ...post,
    content: [
      post.metaDescription,
      'At ReSole, we specialize in second hand sneakers that still have plenty of life left in them. Our team inspects, cleans and authenticates every pair before it goes live on the site.',
      'Use this guide as a reference, then browse our latest arrivals to find affordable, sustainable sneaker options that fit your style and budget.'
    ]
  })),
  ...extraTopics.map((title, index) => {
    const genericDescription =
      'Practical tips from ReSole to help you get more comfort, value and style from every pair of sneakers you wear.';

    const brands = ['Nike', 'Adidas', 'Puma', 'New Balance', 'Reebok', 'Asics'];
    const brandFocus = brands[index % brands.length];

    return {
      title,
      slug: toSlug(title),
      metaDescription: genericDescription,
      brandFocus,
      content: [
        genericDescription,
        'Second hand sneakers are a smart way to experiment with new silhouettes and brands without paying full retail prices.',
        'Whether you are training, commuting or just exploring the city, a well chosen pair of used sneakers can deliver the same performance and comfort at a fraction of the cost.'
      ]
    };
  })
];

