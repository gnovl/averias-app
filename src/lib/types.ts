export interface PostMeta {
  title: string;
  date: string;
  description: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
}
