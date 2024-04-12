export interface IProductMeta {
  name: string
  code: string
  url: string
}

export interface ITalkingPoint {
  text: string
  icon: string
}

export interface IProductPoints {
  [key: string]: ITalkingPoint[]
}

export interface IRecipe {
  title: string
  steps: string[]
}

export interface IProductRecipes {
  [key: string]: IRecipe[]
}
