import { defineField, defineType } from "sanity";

const selectedExperiments = defineType({
  name: 'selectedExperiments',
  title: 'Selected Experiments',
  type: 'document',
  fields: [
    defineField({
      name: 'experiments',
      title: 'Experiments',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'experiment',
          title: 'Experiment',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Selected Experiments",
      };
    },
  },
});

export default selectedExperiments;