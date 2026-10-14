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
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Primary project thumbnail. Defaults to hero.png or the first gallery image.',
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
    }),

    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      description: 'Screenshots and assets captured remotely or uploaded manually.',
      of: [
        defineField({
          type: 'image',
          name: 'galleryImage',
          title: 'Gallery Image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'video',
      title: 'Video Showcase',
      type: 'object',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Enable Video Showcase',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'url',
          title: 'Video URL',
          type: 'url',
          description: 'YouTube, Vimeo, Loom, or direct MP4 link',
        }),
        defineField({
          name: 'asset',
          title: 'Direct Video File',
          type: 'file',
          options: {
            accept: 'video/*',
          },
        }),
      ],
    }),

    defineField({
      name: 'previewGif',
      title: 'Preview Animated GIF',
      type: 'image',
      description: 'Animated GIF recording of project navigation and interaction.',
    }),

    defineField({
      name: 'image',
      title: 'Legacy Image',
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
      cover: 'coverImage',
      media: 'image',
    },
    prepare({title, cover, media}) {
      return {
        title,
        media: cover || media,
      }
    },
  },
})
