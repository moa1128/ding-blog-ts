export type PostType = {
  id: string;
  date?: string;
  title: string | "";
  contentHtml?: string | TrustedHTML;
};