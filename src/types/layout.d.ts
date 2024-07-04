import { Document } from "mongoose";

interface IFAQ extends Document {
  question: string;
  answer: string;
}

interface ICategory extends Document {
  title: {
    ar: string;
    en: string;
  };
}

interface IImage extends Document {
  public_id: string;
  url: string;
}

interface IBannerText extends Document {
  title: string;
  subTitle: string;
}

interface ISocial extends Document {
  title: string;
  url: string;
}

interface INavItem {
  _id: string;
  title: {
    ar: string;
    en: string;
  };
  url: string;
}
interface ILogo {
  title: string;
  image: { public_id: string; url: string };
}
