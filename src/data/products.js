const baseProducts = [
  {
    brand: 'Nike',
    models: [
      'Air Max 90',
      'Air Max 95',
      'Air Max 97',
      'Air Force 1',
      'Blazer Vintage',
      'Cortez Classic',
      'React Infinity Run',
      'Pegasus 39',
      'Pegasus Trail',
      'ZoomX Vaporfly',
      'Dunk Low Retro',
      'Dunk High Retro',
      'Zoom Fly',
      'Structure'
    ]
  },
  {
    brand: 'Adidas',
    models: [
      'Ultraboost 21',
      'Ultraboost 22',
      'NMD R1',
      'NMD Runner',
      'Superstar Classic',
      'Stan Smith',
      'Gazelle Vintage',
      'Solar Glide',
      'Adizero Boston',
      'Adizero Adios',
      'Forum Low',
      'Ozweego',
      '4D Run',
      'Response'
    ]
  },
  {
    brand: 'Puma',
    models: [
      'Suede Classic',
      'RS-X Reinvent',
      'Future Rider',
      'Cali Sport',
      'Thunder Spectra',
      'Velocity Nitro',
      'Deviate Nitro',
      'Liberate Nitro',
      'Ralph Sampson',
      'Rider FV',
      'Wild Rider',
      'RS-0 Play'
    ]
  },
  {
    brand: 'New Balance',
    models: [
      '990v5',
      '574 Classic',
      '327 Retro',
      '1080 Fresh Foam',
      '860v12',
      '530 Runner',
      '2002R',
      'XC-72',
      '650 High',
      'Hierro Trail',
      'More Trail',
      'FuelCell Rebel'
    ]
  },
  {
    brand: 'Reebok',
    models: [
      'Club C 85',
      'Classic Leather',
      'Nano X',
      'Zig Kinetica',
      'Floatride Run',
      'Question Mid',
      'Instapump Fury',
      'Workout Plus',
      'Royal Glide',
      'Legacy Lifter',
      'Shaqnosis',
      'Beatnik'
    ]
  },
  {
    brand: 'Asics',
    models: [
      'Gel-Kayano',
      'Gel-Nimbus',
      'Gel-Cumulus',
      'Novablast',
      'MetaSpeed Sky',
      'Gel-Lyte III',
      'Gel-Quantum',
      'GlideRide',
      'Magic Speed',
      'Gel-Venture',
      'Trabuco Max',
      'Gel-Excite'
    ]
  },
  {
    brand: 'Converse',
    models: [
      'Chuck Taylor All Star High',
      'Chuck Taylor All Star Low',
      'Run Star Hike',
      'One Star Vintage',
      'CONS Louie Lopez',
      'Jack Purcell',
      'Pro Leather',
      'Weapon CX',
      'Skidgrip',
      'All Star Move',
      'All Star Cruise',
      'All Star Lift'
    ]
  },
  {
    brand: 'Vans',
    models: [
      'Old Skool',
      'Sk8-Hi',
      'Authentic',
      'Slip-On Classic',
      'Era Classic',
      'UltraRange',
      'ComfyCush Old Skool',
      'Pro Skate',
      'Chukka Low',
      'AVE Pro',
      'Half Cab',
      'Style 36'
    ]
  }
];

const basePriceByBrand = {
  Nike: 110,
  Adidas: 105,
  Puma: 90,
  'New Balance': 115,
  Reebok: 85,
  Asics: 120,
  Converse: 70,
  Vans: 65
};

const imageBaseByBrand = {
  Nike: 'https://images.unsplash.com/featured/?nike,sneakers',
  Adidas: 'https://images.unsplash.com/featured/?adidas,sneakers',
  Puma: 'https://images.unsplash.com/featured/?puma,sneakers',
  'New Balance': 'https://images.unsplash.com/featured/?new%20balance,sneakers',
  Reebok: 'https://images.unsplash.com/featured/?reebok,sneakers',
  Asics: 'https://images.unsplash.com/featured/?asics,running%20shoes',
  Converse: 'https://images.unsplash.com/featured/?converse,sneakers',
  Vans: 'https://images.unsplash.com/featured/?vans,skate%20shoes'
};

function toSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export const products = baseProducts.flatMap(({ brand, models }) =>
  models.map((model, index) => {
    const name = `${brand} ${model}`;
    const slug = toSlug(name);
    const basePrice = basePriceByBrand[brand] ?? 100;
    const usedDiscount = 0.4 + (index % 5) * 0.05; // 40–60% of retail
    const price = Math.round(basePrice * usedDiscount);

    return {
      name,
      slug,
      brand,
      price,
      image: imageBaseByBrand[brand],
      description: `Pre-loved ${name} sneakers from ReSole. Lightly used, fully cleaned and authenticated, perfect for sneaker fans looking to save on premium ${brand} footwear.`
    };
  })
);

