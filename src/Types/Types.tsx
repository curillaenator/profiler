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
