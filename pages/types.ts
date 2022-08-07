export type Link = {
  id: string
  title: string
  description: string
  url: string
  category: string
  imageUrl: string
}

export type LinksQueryData = {
  links: Link[]
}
