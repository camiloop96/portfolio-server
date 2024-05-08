interface IImage {
  _id: string;
  source: string;
  alt: string;
}

interface IItem {
  english: string;
  spanish: string;
}

interface IDescription {
  short: {
    english: string;
    spanish: string;
  };
  full: {
    english: string;
    spanish: string;
  };
}

interface IDetail {
  requirements: IItem;
  features: IItem[];
  roles: IItem[];
  challenges: IItem[];
  learnings: IItem[];
}

export interface IProject extends Document {
  _id?: string;
  titleItem: IItem;
  subtitle: IItem;
  description: IDescription;
  imageList: IImage[];
  tagList: string[];
  githubLink: string | null;
  deployLink: string | null;
  isPrivate: boolean;
  isOwn: boolean;
  detail: IDetail;
  license: IItem;
}
