export type DesignCategory = 'all' | 'acrylic' | 'oils' | 'digital' | 'coloredpencil' | 'mixed'

export interface DesignWork {
  id: number
  title: string
  medium: string
  category: Exclude<DesignCategory, "all">
  src: string
}

export const designCategories: { id: DesignCategory; label: string }[] = [
  { id: 'all', label: 'Show all' },
  { id: 'acrylic', label: 'Acrylic' },
  { id: 'oils', label: 'Oils' },
  { id: 'digital', label: 'Digital' },
  { id: 'coloredpencil', label: 'Colored pencil' },
  { id: 'mixed', label: 'Mixed media' },
]

export const designWorks: DesignWork[] = [
  {
    "id": 0,
    "title": "Umibozu Logo Decal",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/umibozu-decal.png"
  },
  {
    "id": 1,
    "title": "Umibozu AI Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/umi-ai-logo.png"
  },
  {
    "id": 2,
    "title": "Cloud City",
    "medium": "Digital",
    "category": "digital",
    "src": "/img/cloudcity.svg"
  },
  {
    "id": 3,
    "title": "Hair",
    "medium": "Oils",
    "category": "oils",
    "src": "/img2/hair.jpeg"
  },
  {
    "id": 4,
    "title": "SaltyPlum Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/salty-plum-logo.png"
  },
  {
    "id": 5,
    "title": "Mogget's birthday",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9927.jpeg"
  },
  {
    "id": 6,
    "title": "Lusca Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/lusca.png"
  },
  {
    "id": 7,
    "title": "Matchstick",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/Matchstick.png"
  },
  {
    "id": 8,
    "title": "Leo",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/leo-flowers.png"
  },
  {
    "id": 9,
    "title": "Tiamat Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/tiamat.png"
  },
  {
    "id": 10,
    "title": "Tomatoes",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/tomatoes.png"
  },
  {
    "id": 11,
    "title": "Leo",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/leo-sky.jpeg"
  },
  {
    "id": 12,
    "title": "Ahklut Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/ahklut.png"
  },
  {
    "id": 13,
    "title": "Sound",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/img2/sound.jpeg"
  },
  {
    "id": 14,
    "title": "Jellyfish Engineering",
    "medium": "Digital",
    "category": "digital",
    "src": "/img/jellyfish-pokemon-sticker2.png"
  },
  {
    "id": 15,
    "title": "Falcon",
    "medium": "Digital",
    "category": "digital",
    "src": "/img/falcon.svg"
  },
  {
    "id": 16,
    "title": "Space",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9706.jpeg"
  },
  {
    "id": 17,
    "title": "Lytix Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/leo-lytix-logo-outline-leo_only.png"
  },
  {
    "id": 18,
    "title": "Lemon",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9937.jpeg"
  },
  {
    "id": 19,
    "title": "SpareChange Logo Banner",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/sc_default-banner.png"
  },
  {
    "id": 20,
    "title": "Pieces",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/img2/pieces.jpeg"
  },
  {
    "id": 21,
    "title": "Fruit stickers",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/fruit-stickers.png"
  },
  {
    "id": 22,
    "title": "Lilypads",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/lilypad.png"
  },
  {
    "id": 23,
    "title": "Bottoms up",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9872.jpeg"
  },
  {
    "id": 24,
    "title": "Wedding invite",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/Heart Wedding Invite Template.jpg"
  },
  {
    "id": 25,
    "title": "Mountains",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9861.jpeg"
  },
  {
    "id": 26,
    "title": "Leo",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_0376.jpeg"
  },
  {
    "id": 27,
    "title": "Finn",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9614.jpeg"
  },
  {
    "id": 28,
    "title": "Kyklos",
    "medium": "Digital",
    "category": "digital",
    "src": "/img/kyklos banner.png"
  },
  {
    "id": 29,
    "title": "Shadow",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/shadow.png"
  },
  {
    "id": 30,
    "title": "Watching",
    "medium": "Colored pencil",
    "category": "coloredpencil",
    "src": "/img2/watching.jpeg"
  },
  {
    "id": 31,
    "title": "Branding banner",
    "medium": "Digital",
    "category": "digital",
    "src": "/img/sc_food-banner-long.png"
  },
  {
    "id": 32,
    "title": "Forest",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/img2/forest.png"
  },
  {
    "id": 33,
    "title": "Spirited Away",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/spiritedaway.png"
  },
  {
    "id": 34,
    "title": "Sparks",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/img2/sparks.jpeg"
  },
  {
    "id": 35,
    "title": "Umibozu Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/cute-umi2.png"
  },
  {
    "id": 36,
    "title": "Cherry daily planner",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/cherry daily planner.png"
  },
  {
    "id": 37,
    "title": "Neptune Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/neptune.png"
  },
  {
    "id": 38,
    "title": "Bloom",
    "medium": "Oils",
    "category": "oils",
    "src": "/img2/IMG_9874.jpeg"
  },
  {
    "id": 39,
    "title": "BBNO$ Album Cover",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/bbno$-2-heart-bright.png"
  },
  {
    "id": 40,
    "title": "Martini",
    "medium": "Oils",
    "category": "oils",
    "src": "/img2/IMG_9894.jpeg"
  },
  {
    "id": 41,
    "title": "Man",
    "medium": "Oils",
    "category": "oils",
    "src": "/img2/man.png"
  },
  {
    "id": 42,
    "title": "Currently",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9718.jpeg"
  },
  {
    "id": 43,
    "title": "Baby shower invite template",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/baby shower template - bloom.png"
  },
  {
    "id": 44,
    "title": "Blank eyes",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9934.jpeg"
  },
  {
    "id": 45,
    "title": "Egg",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9659.jpeg"
  },
  {
    "id": 46,
    "title": "Branding banner",
    "medium": "Digital",
    "category": "digital",
    "src": "/img/sc_housing-banner.png"
  },
  {
    "id": 47,
    "title": "Woman",
    "medium": "Colored pencil",
    "category": "coloredpencil",
    "src": "/img2/woman.png"
  },
  {
    "id": 48,
    "title": "Leo",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/leo-box.png"
  },
  {
    "id": 49,
    "title": "Makara Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/makara.png"
  },
  {
    "id": 50,
    "title": "Anxiety",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/img2/anxiety.jpeg"
  },
  {
    "id": 51,
    "title": "Tattooine",
    "medium": "Digital",
    "category": "digital",
    "src": "/img/sunset_tatooine2.svg"
  },
  {
    "id": 52,
    "title": "Tree",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/img2/tree.png"
  },
  {
    "id": 53,
    "title": "Umibozu Pokemon Logo Banner",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/umibozu-bkg.png"
  },
  {
    "id": 54,
    "title": "Girl",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/img2/girl.png"
  },
  {
    "id": 55,
    "title": "Mojito",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/img2/IMG_9646.jpeg"
  },
  {
    "id": 56,
    "title": "Kyklos Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/kyklos-logo-blush-bkg.png"
  },
  {
    "id": 57,
    "title": "Sirenia Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/sirenia.png"
  },
  {
    "id": 58,
    "title": "Umibozu T-Shirt Design",
    "medium": "Digital",
    "category": "digital",
    "src": "/img2/umibozu2.png"
  }
]
