export interface ITalkingPoint {
  text: string
  icon: string
}

export interface IProductPoints {
  [key: string]: ITalkingPoint[]
}