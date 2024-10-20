export interface PlantCategories {
  name: String;
  description: String;
  image: JSX.Element;
  id: String;
  // imageSrc: {
  //   src: JSX.Element,
  //   width: number,
  //   height: number,
  //   format: string,
  // },
  key?: React.Key;
}

export interface PlantSpecies extends PlantCategories {
  tamil_name: string;
  negative?: string;
  keywords: string[];
  href: string;
  id: string;
  imageNoZoom: JSX.Element;
}

export interface PlantSpeciesCount extends PlantSpecies {
  count: number | string;
}

export interface Cart {
  [plantID: string]: number | string;
}
