// queries.ts
import { groq } from "next-sanity";

export const profileQuery = groq`
  *[_type == "profile"][0]{
    profilePicture{
      asset->{
        url
      }
    },
    salutation,
    name,
    intro,
    emailContact{
      email,
      hoverColor,
      icon{
        asset->{
          url
        }
      }
    },
    designProcess[]{
      ...,
    },
    socialLinks[]{
      ...,
      icon{
        asset->{
          url
        }
      }
    }
  }
`

export const selectedExperimentsQuery = groq`
  *[_type == "selectedExperiments"]{
    sectionName,
    experiments[]{
      image{
        asset->{
          _id,
          url
        }
      }
    }
  }
`;

