import { SvgProps } from "react-native-svg";

import { Logo } from "./logo";
import { User } from "./user";
import { Error } from "./error";
import { Avatar_1 } from "./user-avatars/avatar_1";
import { Avatar_2 } from "./user-avatars/avatar_2";
import { Avatar_3 } from "./user-avatars/avatar_3";
import { Avatar_4 } from "./user-avatars/avatar_4";
import { Avatar_5 } from "./user-avatars/avatar_5";
import { Avatar_6 } from "./user-avatars/avatar_6";
import { Avatar_7 } from "./user-avatars/avatar_7";
import { Avatar_8 } from "./user-avatars/avatar_8";
import { Avatar_9 } from "./user-avatars/avatar_9";
import { Avatar_10 } from "./user-avatars/avatar_10";
import { Avatar_11 } from "./user-avatars/avatar_11";
import { Avatar_12 } from "./user-avatars/avatar_12";
import { Avatar_13 } from "./user-avatars/avatar_13";
import { Avatar_14 } from "./user-avatars/avatar_14";
import { Avatar_15 } from "./user-avatars/avatar_15";
import { Avatar_16 } from "./user-avatars/avatar_16";
import { Avatar_17 } from "./user-avatars/avatar_17";
import { Avatar_18 } from "./user-avatars/avatar_18";
import { Avatar_19 } from "./user-avatars/avatar_19";
import { Avatar_20 } from "./user-avatars/avatar_20";
import { Avatar_21 } from "./user-avatars/avatar_21";
import { Avatar_22 } from "./user-avatars/avatar_22";
import { Avatar_23 } from "./user-avatars/avatar_23";

export const appIcons = {
  logo: Logo,
  user: User,
  error: Error,
};

export const userAvatars = {
  avatar_1: Avatar_1,
  avatar_2: Avatar_2,
  avatar_3: Avatar_3,
  avatar_4: Avatar_4,
  avatar_5: Avatar_5,
  avatar_6: Avatar_6,
  avatar_7: Avatar_7,
  avatar_8: Avatar_8,
  avatar_9: Avatar_9,
  avatar_10: Avatar_10,
  avatar_11: Avatar_11,
  avatar_12: Avatar_12,
  avatar_13: Avatar_13,
  avatar_14: Avatar_14,
  avatar_15: Avatar_15,
  avatar_16: Avatar_16,
  avatar_17: Avatar_17,
  avatar_18: Avatar_18,
  avatar_19: Avatar_19,
  avatar_20: Avatar_20,
  avatar_21: Avatar_21,
  avatar_22: Avatar_22,
  avatar_23: Avatar_23,
};

export type IconType = keyof typeof appIcons | "avatar";

export type AvatarType = keyof typeof userAvatars;

export const avatarList = Object.keys(userAvatars) as AvatarType[];

export type IconProps = SvgProps & {
  size?: number;
  name: IconType;
  color?: string;
  isOnlyIcon?: boolean;
  avatarId?: AvatarType;
};
