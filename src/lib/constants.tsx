import type { PlantCategories, PlantSpecies } from './types';

export const PLANT_CATEGORIES: PlantCategories[] = [
  {
    name: 'Evergreen Trees - பசுமை மாறா மரங்கள்',
    image: <img alt="evergreen trees" src="/images/tdef-evergreen.png" className="img-zoom" />,
    description: `Fast growing medium sized evergreen tree. A drough tolerant tree 
    with beautiful foliage`,
    key: 'பசுமை மாறா',
    id: 'பசுமை மாறா'
  },
  {
    name: 'Deciduous Trees - இலையுதிரும் மரங்கள்',
    image: <img alt="deciduous trees" src="/images/aacha-full.jpg" className="img-zoom" />,
    description: `Deciduous trees and shrubs seasonally shed leaves, petals, after flowering & ripe fruit.`,
    key: 'இலையுதிர்',
    id: 'இலையுதிர்'
  },
  {
    name: 'Timber trees - வெட்டு மரங்கள்',
    image: <img alt="timber" src="/images/karungali.jpg" className="img-zoom" />,
    description: `TDEF also has some species of Shrubs which can tolerate 
    high tempatures and at the same time drought`,
    key: 'வெட்டு',
    id: 'வெட்டு'
  },
  {
    name: 'Fruit Trees - பழ மரங்கள்',
    image: <img alt="shrubs" src="/images/kanupala-fruit.webp" className="img-zoom" />,
    description: `TDEF fruit trees play a major role in biodiversity conservation
    as most fruits are consumed by Birds / Bats / Mammals`,
    key: 'பழ',
    id: 'பழ'
  },
  {
    name: 'Flowering Trees - பூ மரங்கள்',
    image: <img alt="flower-trees" src="/images/kaasan-flower.jpg" className="img-zoom" />,
    description: `TDEF also has some species of Shrubs which can tolerate 
    high tempatures and at the same time drought`,
    key: 'பூ',
    id: 'பூ'
  },
]

export const SOUTH_INDIA_TREES: PlantSpecies[] = [
  {
    id: 'sarakkonrai',
    name: 'Cassia fistula',
    tamil_name: 'சரக்கொன்றை',
    image: <img alt="sarakkonrai" src="/images/sarakkonrai.jpg" className="img-zoom hover:scale-150 transition-all duration-1000 ease-out aspect-[1]" />,
    description: `TDEF also has some species of Shrubs which can tolerate 
    high tempatures and at the same time drought`,
    keywords: ['இலையுதிர்', 'நடுத்தர', 'பூ'],
    href: '/sarakkonrai'
  },
  {
    id: 'naaval',
    name: 'Syzygium cumini',
    tamil_name: 'நாவல்',
    image: <img alt="naval" src="/images/naval.jpg" className="img-zoom hover:scale-150 transition-all duration-1000 ease-out aspect-[1]" />,
    description: `TDEF also has some species of Shrubs which can tolerate 
    high tempatures and at the same time drought`,
    keywords: ['பழ', 'நடுத்தர'],
    href: '/naaval'
  },
  {
    id: 'semmaram',
    name: 'Pteroearpus santalinus',
    tamil_name: 'செம்மரம்',
    image: <img alt="semmaram" src="/images/semmaram.jpeg" className="img-zoom hover:scale-150 transition-all duration-1000 ease-out aspect-[1]" />,
    description: `A tall deciduous tree growing over 10 meters in height, with rough bark and no thorns. Also
    a timber tree with a beautiful form`,
    keywords: ['வெட்டு', 'இலையுதிர்'],
    href: '/semmaram'
  },
  // {
  //   name: 'Commiphota berryi',
  //   tamil_name: 'முள் கிளுவை',
  //   image: <img alt="shrubs" src="/images/olirum.png" className="img-zoom" />,
  //   description: `TDEF also has some species of Shrubs which can tolerate 
  //   high tempatures and at the same time drought`,
  //   keywords: []
  // },
  {
    id: 'kuthiraipidungan',
    name: 'Sterculia foatida',
    tamil_name: 'குதிரைப்பிடுக்கன்',
    image: <img alt="kuthiraipidungan" src="/images/kuthirapidukkan.jpg" className="img-zoom" />,
    description: `A tall deciduous tree growing over 10 meters in height, with smooth bark and no thorns.`,
    negative: 'Flowers emit a very unpleasant odour',
    keywords: ['இலையுதிர்', 'உயரம்'],
    href: '/kuthiraipidungan'
  },
  // {
  //   name: 'Khaya senegalensis',
  //   tamil_name: 'காயா',
  //   image: <img alt="shrubs" src="/images/olirum.png" className="img-zoom" />,
  //   description: `TDEF also has some species of Shrubs which can tolerate 
  //   high tempatures and at the same time drought`,
  //   key: 'shrubs'
  // },
  {
    id: 'nuraipungan',
    name: 'Sapindus emarginata',
    tamil_name: 'நுரைப்புங்கன்',
    image: <img alt="shrubs" src="/images/nuraipungan-full.jpg" className="img-zoom" />,
    description: `A medium sized deciduous tree growing upto a height of 10 meters. 
    Dried fruits are natural washing agents and hence used as shampoo / washing powder`,
    keywords: ['இலையுதிர்', 'நடுத்தர'],
    href: '/nuraipungan'
  },
  {
    id: 'pachainazhuvai',
    name: 'Tricalysia sphaerocarpa',
    tamil_name: 'பச்சை நழுவை',
    image: <img alt="pachainazhuvai" src="/images/pachainazhuvai-fruit.jpg" className="img-zoom" />,
    description: `Fast growing medium sized evergreen tree. A drough tolerant tree 
    with beautiful foliage`,
    keywords: ['பசுமை மாறா', 'நடுத்தர', 'வேகமாக'],
    href: '/pachainazhuvai'
  },
  {
    id: 'vennaghu',
    name: 'Pterospermum suberifolium',
    tamil_name: 'வெண்ணங்கு',
    image: <img alt="shrubs" src="/images/vennaghu.jpg" className="img-zoom" />,
    description: `Fast growing medium sized evergreen tree. A drough tolerant tree 
    with beautiful foliage`,
    keywords: ['நடுத்தர', 'வேகமாக'],
    href: '/vennaghu'
  },
  {
    id: 'kakkaipazhai',
    name: 'Suregada angustifolia',
    tamil_name: 'காக்கை பாலை',
    image: <img alt="shrubs" src="/images/kakkaipazhai-full.jpg" className="img-zoom" />,
    description: `An evergreen shrub. A drough tolerant shrub 
    with beautiful foliage. Flower during Feb - May`,
    keywords: ['பசுமை மாறா', 'புதர்', 'வேகமாக'],
    href: '/kakkaipazhai'
  },
  {
    id: 'irumpuli',
    name: 'Diospyros ferrea varboxifolk',
    tamil_name: 'இரும்புலி',
    image: <img alt="shrubs" src="/images/irumpuli.jpg" className="img-zoom" />,
    description: `Known as Black Ebony. A small evergreen tree growing upto a height of
    6 meters. Wood is valuable.`,
    keywords: ['குட்டி', 'பசுமை மாறா', 'மெதுவாக', 'வறட்சி', 'endangered'],
    href: '/irumpuli'
  },
  {
    id: 'neerkadambai',
    name: 'Barringtonia acutangula',
    tamil_name: 'நீர்க்கதம்பை',
    image: <img alt="shrubs" src="/images/neerkadambai.png" className="img-zoom" />,
    description: `TDEF also has some species of Shrubs which can tolerate 
    high tempatures and at the same time drought`,
    keywords: ['பசுமை மாறா', 'மெதுவாக', 'வறட்சி', 'வெட்டு', 'நடுத்தர'],
    href: '/neerkadambai'
  },
  {
    id: 'aacha',
    name: 'Hardwiekia binata',
    tamil_name: 'ஆச்சா',
    image: <img alt="shrubs" src="/images/aacha-full.jpg" className="img-zoom" />,
    description: `A medium size deciduous tree.`,
    keywords: ['நடுத்தர', 'இலையுதிர்', 'வேகமாக', 'வறட்சி', 'fodder', 'வெட்டு'],
    href: '/aacha'
  },
  {
    id: 'tharani',
    name: 'Tarenna asiafica',
    tamil_name: 'தாரனி',
    image: <img alt="tharani" src="/images/tharani-full.jpg" className="img-zoom" />,
    description: `An evergreen medium size shrub. Also drought tolerant, 
    has beautiful foliage and fast growing.`,
    keywords: ['புதர்', 'வறட்சி', 'பசுமை மாறா', 'வேகமாக'],
    href: '/tharani'
  },
  {
    id: 'vaalsaram',
    name: 'Walsura Trifoliolata',
    tamil_name: 'வால்சரம்',
    image: <img alt="vaalsaram" src="/images/vaalsaram-full.jpeg" className="img-zoom" />,
    description: `A medium sized evergreen tree. A drough tolerant tree, has beautiful foliage
    and fast growing.`,
    keywords: ['பசுமை மாறா', 'நடுத்தர', 'வறட்சி', 'வேகமாக'],
    href: '/vaalsaram'
  },
  {
    id: 'kaasaan',
    name: 'Memecylon uwbellatum',
    tamil_name: 'காசான்',
    image: <img alt="kaasaan" src="/images/kaasaan.png" className="img-zoom" />,
    description: `A small evergreen garden tree with beautiful flowers.`,
    keywords: ['குட்டி', 'பசுமை மாறா', 'அலங்கார'],
    href: '/kaasaan'
  },
  {
    id: 'kanupala', 
    name: 'Manilkara hexandra',
    tamil_name: 'கணுப்பலா',
    image: <img alt="shrubs" src="/images/kanupala-full.png" className="img-zoom" />,
    description: `A medium sized evergreen tree. Tree is drough tolerant, has evergreen foliage
    and is slow growing. Sloth Bears enjoy the edible fruits of these trees.`,
    keywords: ['பசுமை மாறா', 'நடுத்தர', 'வறட்சி', 'மெதுவாக', 'பழ'],
    href: '/kanupala'
  },
  {
    id: 'aavarai',
    name: 'Senna auriculata',
    tamil_name: 'ஆவாரை',
    image: <img alt="aavarai" src="/images/aavarai-full.jpeg" className="img-zoom" />,
    description: `A drought tolerant shrub that also attracts butterflies`,
    keywords: ['புதர்', 'பறவைகள் விரும்பும்','பூ'],
    href: '/aavarai'
  },
  {
    id: 'veerai',
    name: 'Drypetes sepiaria',
    tamil_name: 'வீரை',
    image: <img alt="veerai" src="/images/veerai-fruits.jpeg" className="img-zoom" />,
    description: `A medium sized evergreen tree. Tree is drough tolerant, has evergreen foliage
    and is slow growing.`,
    keywords: ['நடுத்தர', 'பசுமை மாறா', 'வறட்சி', 'மெதுவாக'],
    href: '/veerai'
  },
  {
    id: 'konjhi',
    name: 'Glycosmis mauritiana',
    tamil_name: 'கொஞ்சி',
    image: <img alt="konjhi" src="/images/konjhi-fruits.jpg" className="img-zoom" />,
    description: `An evergreen shrub. Also drought tolerant, 
    has beautiful foliage and fast growing.`,
    keywords: ['புதர்', 'வறட்சி', 'பசுமை மாறா', 'வேகமாக'],
    href: '/konjhi'
  },
  {
    id: 'vaagai',
    name: 'Albizia lebbeck',
    tamil_name: 'வாகை',
    image: <img alt="vaagai" src="/images/vaagai-full.jpg" className="img-zoom" />,
    description: `A large deciduous tree with beautiful flowers. Also a fast growing tree
    suitable for creating an early canopy`,
    keywords: ['இலையுதிர்', 'வேகமாக'],
    href: '/vaagai'
  },
  {
    id: 'neermaruthu',
    name: 'Terminalia arjuna',
    tamil_name: 'நீர் மருது',
    image: <img alt="neermaruthu" src="/images/neermaruthu-full.jpeg" className="img-zoom" />,
    description: `A large, spreading deciduous tree with beautiful bark. Drought tolerant tree
    generally found along river banks.`,
    keywords: ['இலையுதிர்', 'மெதுவாக', 'வறட்சி'],
    href: '/neermaruthu'
  },
  {
    id: 'eeti',
    name: 'Dalbergia latifolia',
    tamil_name: 'ஈட்டி',
    image: <img alt="eeti" src="/images/eeti-full.jpg" className="img-zoom" />,
    description: `A tall deciduous tree generally found on hillocks. Wood is used for
    furniture making. ALbeit a slow growing, drought tolerant tree.`,
    keywords: ['வெட்டு', 'உயரம்', 'இலையுதிர்', 'மெதுவாக', 'வறட்சி'],
    href: '/eeti'
  },
  {
    id: 'karumaruthu',
    name: 'Terminalia crenulata',
    tamil_name: 'கரு மருது',
    image: <img alt="karumaruthu" src="/images/karumaruthu-full.jpg" className="img-zoom" />,
    description: `A large deciduous tree. Bark is blackish-grey, fissured like a 
    crocodile back. Fruit is a winged capsule, reddish when mature.`,
    keywords: ['வெட்டு'],
    href: '/karumaruthu'
  },
  {
    id: 'pinnai',
    name: 'Calophyllum iuophyllu',
    tamil_name: 'பிண்னை',
    image: <img alt="pinnai" src="/images/pinnai-full.jpg" className="img-zoom" />,
    description: `A large evergreen tree with decorative leaves, fragrant flowers and spreading crown`,
    keywords: ['timber', 'அலங்கார', 'பறவைகள் விரும்பும்', 'பசுமை மாறா'],
    href: '/pinnai'
  },
  {
    id: 'kaatuezhumichai',
    name: 'Atalantia monophylla',
    tamil_name: 'காட்டு எலுமிச்சை',
    image: <img alt="kaatuezhumichai" src="/images/kaatuezhumichai.jpeg" className="img-zoom" />,
    description: `A medium sized evergreen tree with fruits being used for pickles`,
    keywords: ['நடுத்தர', 'பசுமை மாறா', 'வறட்சி', 'மெதுவாக'],
    href: '/kaatuezhumichai'
  },
  {
    id: 'kaatuiluppai',
    name: 'Madhuca longifolia',
    tamil_name: 'காட்டு இலுப்பை',
    image: <img alt="kaatuiluppai" src="/images/kaatuiluppai-full.jpg" className="img-zoom" />,
    description: `A large spreading evergreen tree with edible fruits and flowers. This tree
    is a beautiful, slow-growing tree.`,
    keywords: ['உயரம்', 'பசுமை மாறா', 'மெதுவாக'],
    href: '/kaatuiluppai'
  },
  {
    id: 'maghilam',
    name: 'Mimusops elengi',
    tamil_name: 'மகிழம்',
    image: <img alt="maghilam" src="/images/maghilam-full.jpg" className="img-zoom" />,
    description: `A medium sized tree with evergreen foliage with fragrant flowers. 
    Its timber is valuable, the fruit is edible & also drought resistant. `,
    keywords: ['நடுத்தர', 'பசுமை மாறா', 'மெதுவாக', 'வறட்சி', 'அலங்கார'],
    href: '/maghilam'
  },
  {
    id: 'kuttipazha',
    name: 'Streblus asper',
    tamil_name: 'பிராய், குட்டிபலா',
    image: <img alt="kuttipazha" src="/images/kuttipazha.jpg" className="img-zoom" />,
    description: `A medium sized tree with evergreen foliage. It is also drought resistant 
    and slow-growing`,
    keywords: ['நடுத்தர', 'பசுமை மாறா', 'மெதுவாக', 'வறட்சி'],
    href: '/kuttipazha'
  },
  // {
  //   name: 'Anthocephalus cadamba',
  //   tamil_name: 'கடம்பு',
  //   image: <img alt="shrubs" src="/images/olirum.png" className="img-zoom" />,
  //   description: `TDEF also has some species of Shrubs which can tolerate 
  //   high tempatures and at the same time drought`,
  //   key: 'shrubs'
  // },
  {
    id: 'konghilavam',
    name: 'Cochlospermum religiosum',
    tamil_name: 'கொங்கிலவம்',
    image: <img alt="konghilavam" src="/images/konghilavam-flower.jpg" className="img-zoom" />,
    description: `A medium sized deciduous tree with bright yellow colour flowers. The
    fibre is used for pillow / mattresses`,
    keywords: ['நடுத்தர', 'இலையுதிர்'],
    href: '/konghilavam'
  },
  {
    id: 'karungali',
    name: 'Diospyros ebenum',
    tamil_name: 'கருங்காலி',
    image: <img alt="karungali" src="/images/karungali.jpg" className="img-zoom" />,
    description: `A medium sized evergreen tree. Produces valuable timber.`,
    keywords: ['நடுத்தர', 'பசுமை மாறா', 'timber', 'மெதுவாக'],
    href: '/karungali'
  },
]