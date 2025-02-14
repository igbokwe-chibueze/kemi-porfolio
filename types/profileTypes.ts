// types/profile.ts

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Represents an image asset from Sanity.
export interface ImageAsset {
  asset: {
    url: string;
  };
}
  
// Email contact information.
export interface EmailContact {
  email: string;
  icon?: SanityImageSource;
  hoverColor?: string;
}
  
// Optional design process item (if used).
export interface DesignProcessItem {
  topic: string;
  headingBg?: string;
  headingTextColor?: string;
  body: string;
}
  
// Social link information.
export interface SocialLink {
  platform: string;
  url: string;
  icon?: ImageAsset;
  hoverColor?: string;
}
  
// Overall profile type based on your schema.
export interface ProfileType {
  profilePicture: SanityImageSource;
  salutation: string;
  name: string;
  intro: string;
  emailContact?: EmailContact;
  designProcess?: DesignProcessItem[];
  socialLinks?: SocialLink[];
}
  