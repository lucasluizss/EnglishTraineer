import { Url } from 'url';

export default interface Link {
  id: string;
  title: string;
  description: string;
  url: Url;
  moduleId: string;
}
