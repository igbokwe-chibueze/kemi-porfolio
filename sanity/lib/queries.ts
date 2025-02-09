// queries.js (or within your page file)
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
    designProcess[]{
      ...,
    }
  }
`
