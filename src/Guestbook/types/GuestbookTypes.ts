export interface IGuestbookComment extends Document {
  _id?: string;
  guest: {
    name: string;
    isGuest: boolean;
    avatar: string;
  };
  postData: {
    type: string;
    message: string;
  };
  company: {
    name: string;
    url: string;
  };
  isGuest: boolean;
  createdAt: Date;
}
