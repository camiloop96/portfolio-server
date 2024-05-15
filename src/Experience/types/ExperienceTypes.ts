export interface IExperience {
  date: {
    english: string;
    spanish: string;
  };
  position: {
    english: string;
    spanish: string;
  };
  company: string;
  locationJob: string;
  responsabilities: [
    {
      english: string;
      spanish: string;
    }
  ];
}
