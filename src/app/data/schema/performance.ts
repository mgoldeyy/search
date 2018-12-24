import { Artist } from './artist';
import { HalLinks } from './hal-links';

export class Performance {
  id: number;
  name: String;
  performanceDate: String;
  venue: String;
  city: String;
  state: String;
  set1: String;
  set2: String;
  set3: String;
  description: String;
  year: number;
  _embedded: {
    artist: Artist;
    source: {
      _links: HalLinks;
    };
    performanceLink: {
      _links: HalLinks;
    }
    performanceCorrection: {
      _links: HalLinks;
    }
    userPerformance: {
      _links: HalLinks;
    }
    wantlistUser: {
      _links: HalLinks;
    }
  };
  _links: HalLinks;
}