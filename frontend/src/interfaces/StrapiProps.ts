export interface StrapiProps {
  endpoint: string;
  query?: Record<string, string>;
  page?: string;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}
