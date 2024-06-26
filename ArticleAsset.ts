export interface ArticleAsset{
  _id: string
  articleIdRef: string
  thumbnail: {
    originalname: string
    encoding: string
    mimetype: string
    filename: string
    size: number
    relativePath: string
    dataURL: string
  }
  contentStructureType: string | "quilljs" | "markdown" | undefined
  content: [] | string
  totalWordCounts: number
}

export interface GET_responseArticleAsset extends ArticleAsset{
  thumbnailDataURL?: string
}