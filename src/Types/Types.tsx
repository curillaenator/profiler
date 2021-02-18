// UI

export type MenuParams = {
  height: number;
};

export type MenuButtons = {
  profile: string;
  skills: string;
  works: string;
  dialogs: string;
};

// PROFILE

export type UserData = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    facebook: string;
    website: string;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: string;
  };
  aboutMe: string;
  // photos: {
  //   small: string;
  //   large: string;
  // };
};

// FINDUSERS

export type Photos = {
  small: string | null;
  large: string | null;
};

export type SingleUser = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: Photos;
  status: string | null;
  followed: boolean;
};
