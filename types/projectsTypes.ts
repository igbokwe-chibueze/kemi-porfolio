// types/projects.ts

import { SanityImageSource } from "@sanity/image-url/lib/types/types";


// Represents an image asset from Sanity.
// export interface ImageAsset {
//   asset: {
//     url: string;
//   };
// }

// Represents a snapshot with an image and descriptions.
export interface Snapshot {
  imageUrl?: SanityImageSource;
  description?: string[];
}

// Project overview details.
export interface ProjectOverview {
  backgroundInfo: string;
  problems?: string[];
  goals?: string[];
  opportunity?: string[];
  solutions?: string[];
}

// Individual project item.
export interface ProjectItem {
  heading: string;
  headingBg?: string;
  btnBg?: string;
  headingTextColor?: string;
  headerImage: SanityImageSource;
  smallImage: SanityImageSource;
  tags?: string[];
  liveLink?: string;
  slug: string;
  projectOverview?: ProjectOverview;
  snapshots?: Snapshot[];
}

// Main projects interface.
export interface ProjectsType {
  title: string;
  items: ProjectItem[];
}
