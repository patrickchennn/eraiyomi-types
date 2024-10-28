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
  contentStructureType: "markdown" | null
  content: string | {
    fileName: string,
    relativePath:string,
    mimeType: string,
  }[]
  totalWordCounts: number
}

// HTTP Article Asset Get Response Client side
export interface HTTPGetArticleAssetRes extends ArticleAsset{
  rawText?: string
  rawHTML?: string  
}
