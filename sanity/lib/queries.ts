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


export const projectsQuery = groq`
  *[_type == "projects"]{
    title,
    items[]{
      heading,
      headingBg,
      btnBg,
      headingTextColor,
      headerImage{
        asset->{
          url
        }
      },
      smallImage{
        asset->{
          url
        }
      },
      tags,
      liveLink,
      "slug": slug.current, // ✅ Extracts only the 'current' string
      projectOverview{
        backgroundInfo,
        problems,
        goals,
        opportunity,
        solutions
      },
      snapshots[]{
        imageUrl{
          asset->{
            url
          }
        },
        description
      }
    }
  }
`;


export const projectBySlugQuery = groq`
  *[_type == "projects"]{
    "project": items[slug.current == $slug][0]
  }[0]
`;

