import { defineField, defineType } from "sanity";

const projects = defineType({
    name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
        name: "title",
        title: "Title",
        type: "string",
        validation: (rule) => rule.required(),
        description: 'This can be the name of an organisation, under which you can create several projects.',
    }),
    defineField({
        name: "items",
        title: "Projects",
        type: "array",
        description: 'These should be different projects handled under this organisation',
        of: [
          defineField({
            type: "object",
            name: "project",
            title: "Project",
            fields: [
              defineField({
                name: "heading",
                title: "Heading",
                type: "string",
                validation: (rule) => rule.required(),
              }),
              defineField({
                name: "headingBg",
                title: "Heading Background",
                type: "string",
                description: "Enter a hex code (e.g., #171E0A)",
              }),
              defineField({
                name: "btnBg",
                title: "Button Background",
                type: "string",
                description: "Enter a hex code (e.g., #43C949)",
              }),
              defineField({
                name: "headingTextColor",
                title: "Heading Text Color",
                type: "string",
                description: "Enter a hex code (e.g., #C7FC56)",
              }),
              defineField({
                name: "headerImage",
                title: "Header Image",
                type: "image",
                options: { hotspot: true },
                validation: (rule) => rule.required(),
              }),
              defineField({
                name: "smallImage",
                title: "Small Image",
                type: "image",
                options: { hotspot: true },
                validation: (rule) => rule.required(),
              }),
              defineField({
                name: "tags",
                title: "Tags",
                type: "array",
                of: [{ type: "string" }],
              }),
              defineField({
                name: "liveLink",
                title: "Live Link",
                type: "url",
              }),
              defineField({
                name: "slug",
                title: "Slug",
                type: "slug",
                options: {
                    // The `source` function below is used to automatically generate the slug value.
                    // Since this slug field is nested within an object (inside an array), we can't directly reference "heading" by name.
                    // Instead, we access the parent object using `context.parent` and cast it to an object that may contain a `heading` property.
                    // We then return the value of `heading` if it exists, or an empty string as a fallback.
                    // Returning an empty string ensures that the function always returns a string, which is required by Sanity's slug generation.
                    source: (_doc, context) => {
                      const parent = context.parent as { heading?: string };
                      return parent?.heading || "";
                    },
                    maxLength: 90,
                },
                validation: (rule) => rule.required(),
              }),
              defineField({
                name: "projectOverview",
                title: "Project Overview",
                type: "object",
                fields: [
                  defineField({
                    name: "backgroundInfo",
                    title: "Background Info",
                    type: "text",
                    validation: (rule) => rule.required(),
                  }),
                  defineField({
                    name: "problems",
                    title: "Problems",
                    type: "array",
                    of: [{ type: "string" }],
                  }),
                  defineField({
                    name: "goals",
                    title: "Goals",
                    type: "array",
                    of: [{ type: "string" }],
                  }),
                  defineField({
                    name: "opportunity",
                    title: "Opportunity",
                    type: "array",
                    of: [{ type: "string" }],
                  }),
                  defineField({
                    name: "solutions",
                    title: "Solutions",
                    type: "array",
                    of: [{ type: "string" }],
                  }),
                ],
              }),
              defineField({
                name: "snapshots",
                title: "Snapshots",
                type: "array",
                of: [
                  defineField({
                    type: "object",
                    name: "snapshot",
                    title: "Snapshot",
                    fields: [
                      defineField({
                        name: "imageUrl",
                        title: "Image",
                        type: "image",
                        options: { hotspot: true },
                      }),
                      defineField({
                        name: "description",
                        title: "Description",
                        type: "array",
                        of: [{ type: "string" }],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "items.0.headerImage", // picks the header image from the first project in items
    },
  },
});

export default projects;