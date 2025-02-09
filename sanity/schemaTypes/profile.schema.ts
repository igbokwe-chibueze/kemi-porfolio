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
            }),
            defineField({
              name: 'headingTextColor',
              title: 'Heading Text Color',
              type: 'string',
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
  ],
})

export default profileData
