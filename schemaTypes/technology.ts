import {defineField, defineType} from 'sanity'

export const technology = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Canonical Name',
      type: 'string',
      description: 'The standard display name used throughout the portfolio.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'aliases',
      title: 'Aliases',
      type: 'array',
      description: 'Alternative spellings or names that should resolve to this technology.',
      of: [
        {
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'A short explanation shown in technology tooltips.',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
  },
})
