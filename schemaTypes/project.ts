import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fa',
          title: 'Persian',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value?.current) {
            return 'Slug is required'
          }

          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current)) {
            return 'Use lowercase letters, numbers, and hyphens only'
          }

          return true
        }),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fa',
          title: 'Persian',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        defineField({
          type: 'string',
          name: 'technology',
          title: 'Technology',
        }),
      ],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.min(1).error('Add at least one technology'),
    }),

    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),

    defineField({
      name: 'demo',
      title: 'Demo URL',
      type: 'url',
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        defineField({
          name: 'overview',
          title: 'Overview',
          type: 'object',
          fields: [
            defineField({
              name: 'en',
              title: 'English',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'fa',
              title: 'Persian',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'challenges',
          title: 'Challenges',
          type: 'object',
          fields: [
            defineField({
              name: 'en',
              title: 'English',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'fa',
              title: 'Persian',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'outcome',
          title: 'Outcome',
          type: 'object',
          fields: [
            defineField({
              name: 'en',
              title: 'English',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'fa',
              title: 'Persian',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title.en',
      media: 'image',
    },
  },
})
