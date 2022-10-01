const CLOTHES_PATH = '/clothes-icons/'
const createClothes = (...args) => args.map(([path, name]) => ({ path: `${CLOTHES_PATH}${path}.svg`, name }))

const CLOTH_ICON_MAP = {
  tShirt: ['tshirt', 'koszulka'],
  shorts: ['shorts', 'krótkie spodenki'],
  jacket: ['jacket', 'lekka kurtka'],
  trousers: ['trousers', 'długie spodnie'],
  hood: ['hood', 'bluza'],
  winterJacket: ['winter-jacket', 'kurtka zimowa'],
  umbrella: ['umbrella', 'parasolka'],
}

const TEMP_MAP = [
  { temperature: 5, clothes: createClothes(CLOTH_ICON_MAP.winterJacket, CLOTH_ICON_MAP.trousers) },
  { temperature: 12, clothes: createClothes(CLOTH_ICON_MAP.jacket, CLOTH_ICON_MAP.trousers) },
  { temperature: 19, clothes: createClothes(CLOTH_ICON_MAP.hood, CLOTH_ICON_MAP.trousers) },
  { temperature: Infinity, clothes: createClothes(CLOTH_ICON_MAP.tShirt, CLOTH_ICON_MAP.shorts) },
]

const getClothing = (currentConditions) => {
  const { temp, preciptype, precipprob } = currentConditions
  const { clothes } = TEMP_MAP.find(({ temperature }) => temp <= temperature)
  const shouldTakeUmbrella = preciptype?.includes('rain') && precipprob > 50

  if (shouldTakeUmbrella) {
    const [umbrella] = createClothes(CLOTH_ICON_MAP.umbrella)
    clothes.push(umbrella)
  }

  return clothes
}

export default getClothing
