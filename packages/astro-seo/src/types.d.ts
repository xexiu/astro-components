export type PostDataFeaturedImage = {
    src: string | any;
    alt: string;
 }

export type PostData = {
    category: string;
    title: string;
    excerpt: string;
    tags: string[];
    date: Date | string;
    author: string;
    featured_post?: boolean;
    is_private?: boolean;
    featured_image: PostDataFeaturedImage;
 }

export type Post = {
    id: string;
    slug: string;
    body: any;
    collection: string;
    data: PostData
 }
