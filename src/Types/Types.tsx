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
  userId: number | null;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  aboutMe: string | null;
  photos?: Photos;
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
