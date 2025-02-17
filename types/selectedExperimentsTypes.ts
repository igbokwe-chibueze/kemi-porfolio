import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Represents a single experiment item.
export interface Experiment {
  image: SanityImageSource;
}

// Represents the Selected Experiments document.
export interface SelectedExperimentsType {
  experiments: Experiment[];
}
