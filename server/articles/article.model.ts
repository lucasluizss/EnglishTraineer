import { Url } from 'url';

export default interface Achievement {
  id: string;
  title: string;
  description: string;
  text: string;
  url?: Url;
  moduleId: string;
}
