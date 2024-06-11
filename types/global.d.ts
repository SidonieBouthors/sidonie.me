export {};

declare global {
  type Recipe = {
    name: string;
    slug: string;
    imageURL: string;
    pageContentPath: string;
  };
}
