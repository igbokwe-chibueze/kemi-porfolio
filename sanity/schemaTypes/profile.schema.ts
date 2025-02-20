//profile.schema.ts

import {defineField, defineType} from 'sanity'

const profileData = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'salutation',
      title: 'Salutation',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      validation: (rule) => rule.required().min(10), // Ensures at least 10 characters
    }),
    // Email Contact field with email, icon, and hoverColor
    defineField({
      name: 'emailContact',
      title: 'Email Contact',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (rule) => rule.required().email(),
        }),
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'image',
          options: { hotspot: true },
          description: 'Upload an icon image for the email address',
        }),
        defineField({
          name: 'hoverColor',
          title: 'Hover Color',
          type: 'string',
          description: 'Enter a hex code for the hover color (e.g., #FF5733)',
        }),
      ],
    }),
    defineField({
      name: 'designProcess',
      title: 'Design Process',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'designProcessItem',
          title: 'Design Process Item',
          fields: [
            defineField({
              name: 'topic',
              title: 'Topic',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'headingBg',
              title: 'Heading Background',
              type: 'string',
              description: 'Enter a hex code for the heading color (e.g., #FF5733)',
            }),
            defineField({
              name: 'headingTextColor',
              title: 'Heading Text Color',
              type: 'string',
              description: 'Enter a hex code for the text color (e.g., #FF5733)',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'socialLink',
          title: 'Social Link',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: { hotspot: true },
              description: 'Upload an icon image for this social platform',
            }),
            defineField({
              name: 'hoverColor',
              title: 'Hover Color',
              type: 'string',
              description: 'Enter a hex code for the hover color (e.g., #FF5733)',
            }),
          ],
        }),
      ],
    }),
  ],
})

export default profileData
