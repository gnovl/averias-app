import { Key } from "react";

export type PostMeta = {
  image: any;
  slug: Key | null | undefined;
  title: string;
  date: string;
};

export type Post = PostMeta & {
  slug: string;
  content: string;
};
