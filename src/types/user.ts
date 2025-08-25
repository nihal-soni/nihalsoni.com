export type User = {
  firstName: string;
  lastName: string;
  displayName: string;
  username: string;
  bio: string;
  flipSentences: string[];
  email: string;
  about: string;
  /** Public URL to avatar image */
  avatar: string;
  keywords: string[];
  /** Profile/site start date in YYYY-MM-DD */
  dateCreated: string;
};
