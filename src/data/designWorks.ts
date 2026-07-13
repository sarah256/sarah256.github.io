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
    "src": "/gallery/img2/umibozu-decal.png"
  },
  {
    "id": 1,
    "title": "Umibozu AI Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/umi-ai-logo.png"
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
    "src": "/gallery/img2/hair.jpeg"
  },
  {
    "id": 4,
    "title": "SaltyPlum Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/salty-plum-logo.png"
  },
  {
    "id": 5,
    "title": "Mogget's birthday",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9927.jpeg"
  },
  {
    "id": 6,
    "title": "Lusca Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/lusca.png"
  },
  {
    "id": 7,
    "title": "Matchstick",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/Matchstick.jpg"
  },
  {
    "id": 8,
    "title": "Leo",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/leo-flowers.jpg"
  },
  {
    "id": 9,
    "title": "Tiamat Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/tiamat.png"
  },
  {
    "id": 10,
    "title": "Me Typing",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/me-typing_frames.png"
  },
  {
    "id": 11,
    "title": "Tomatoes",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/tomatoes.jpg"
  },
  {
    "id": 12,
    "title": "Leo",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/leo-sky.jpeg"
  },
  {
    "id": 13,
    "title": "Ahklut Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/ahklut.png"
  },
  {
    "id": 14,
    "title": "Sound",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/gallery/img2/sound.jpeg"
  },
  {
    "id": 15,
    "title": "Jellyfish Engineering",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img/jellyfish-pokemon-sticker2.jpg"
  },
  {
    "id": 16,
    "title": "Falcon",
    "medium": "Digital",
    "category": "digital",
    "src": "/img/falcon.svg"
  },
  {
    "id": 17,
    "title": "Space",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9706.jpeg"
  },
  {
    "id": 18,
    "title": "Lytix Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/leo-lytix-logo-outline-leo_only.png"
  },
  {
    "id": 19,
    "title": "Lemon",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9937.jpeg"
  },
  {
    "id": 20,
    "title": "SpareChange Logo Banner",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/sc_default-banner.png"
  },
  {
    "id": 21,
    "title": "Pieces",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/gallery/img2/pieces.jpeg"
  },
  {
    "id": 22,
    "title": "Fruit stickers",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/fruit-stickers.png"
  },
  {
    "id": 23,
    "title": "Lilypads",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/lilypad.jpg"
  },
  {
    "id": 24,
    "title": "Bottoms up",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9872.jpeg"
  },
  {
    "id": 25,
    "title": "Wedding invite",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/Heart Wedding Invite Template.jpg"
  },
  {
    "id": 26,
    "title": "Mountains",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9861.jpeg"
  },
  {
    "id": 27,
    "title": "Leo",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_0376.jpeg"
  },
  {
    "id": 28,
    "title": "Finn",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9614.jpeg"
  },
  {
    "id": 29,
    "title": "Kyklos",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img/kyklos banner.png"
  },
  {
    "id": 30,
    "title": "Shadow",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/shadow.jpg"
  },
  {
    "id": 31,
    "title": "Watching",
    "medium": "Colored pencil",
    "category": "coloredpencil",
    "src": "/gallery/img2/watching.jpeg"
  },
  {
    "id": 32,
    "title": "Branding banner",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img/sc_food-banner-long.jpg"
  },
  {
    "id": 33,
    "title": "Forest",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/gallery/img2/forest.jpg"
  },
  {
    "id": 34,
    "title": "Spirited Away",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/spiritedaway.jpg"
  },
  {
    "id": 35,
    "title": "Sparks",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/gallery/img2/sparks.jpeg"
  },
  {
    "id": 36,
    "title": "Umibozu Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/cute-umi2.png"
  },
  {
    "id": 37,
    "title": "Cherry daily planner",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/cherry daily planner.png"
  },
  {
    "id": 38,
    "title": "Neptune Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/neptune.png"
  },
  {
    "id": 39,
    "title": "Bloom",
    "medium": "Oils",
    "category": "oils",
    "src": "/gallery/img2/IMG_9872.jpeg"
  },
  {
    "id": 40,
    "title": "BBNO$ Album Cover",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/bbno$-2-heart-bright.png"
  },
  {
    "id": 41,
    "title": "Martini",
    "medium": "Oils",
    "category": "oils",
    "src": "/gallery/img2/IMG_9894.jpeg"
  },
  {
    "id": 42,
    "title": "Man",
    "medium": "Oils",
    "category": "oils",
    "src": "/gallery/img2/man.jpg"
  },
  {
    "id": 43,
    "title": "Currently",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9718.jpeg"
  },
  {
    "id": 44,
    "title": "Baby shower invite template",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/baby shower template - bloom.png"
  },
  {
    "id": 45,
    "title": "Blank eyes",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9934.jpeg"
  },
  {
    "id": 46,
    "title": "Egg",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9659.jpeg"
  },
  {
    "id": 47,
    "title": "Branding banner",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img/sc_housing-banner.png"
  },
  {
    "id": 48,
    "title": "Woman",
    "medium": "Colored pencil",
    "category": "coloredpencil",
    "src": "/gallery/img2/woman.jpg"
  },
  {
    "id": 49,
    "title": "Leo",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/leo-box.jpg"
  },
  {
    "id": 50,
    "title": "Makara Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/makara.png"
  },
  {
    "id": 51,
    "title": "Anxiety",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/gallery/img2/anxiety.jpeg"
  },
  {
    "id": 52,
    "title": "Tattooine",
    "medium": "Digital",
    "category": "digital",
    "src": "/img/sunset_tatooine2.svg"
  },
  {
    "id": 53,
    "title": "Tree",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/gallery/img2/tree.jpg"
  },
  {
    "id": 54,
    "title": "Umibozu Pokemon Logo Banner",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/umibozu-bkg.png"
  },
  {
    "id": 55,
    "title": "Girl",
    "medium": "Mixed media",
    "category": "mixed",
    "src": "/gallery/img2/girl.jpg"
  },
  {
    "id": 56,
    "title": "Mojito",
    "medium": "Acrylic",
    "category": "acrylic",
    "src": "/gallery/img2/IMG_9646.jpeg"
  },
  {
    "id": 57,
    "title": "Kyklos Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/kyklos-logo-blush-bkg.png"
  },
  {
    "id": 58,
    "title": "Sirenia Pokemon Logo",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/sirenia.png"
  },
  {
    "id": 59,
    "title": "Umibozu T-Shirt Design",
    "medium": "Digital",
    "category": "digital",
    "src": "/gallery/img2/umibozu2.png"
  }
]
