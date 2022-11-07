export interface INewsSlides {
  image: string
  date: string
  title: string
  text: string
}

export interface ICardData {
  image: string
  title?: string
  text?: string
}

export type LayoutMode = 'website' | 'store'