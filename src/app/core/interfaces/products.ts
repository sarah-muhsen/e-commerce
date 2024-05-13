export type Root = product[]

export interface product {
  sold: number
  images: string[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: Categorypro
  ratingsAverage: number
  
}



export interface Categorypro {
  _id: string
  name: string
  slug: string
  image: string
}


