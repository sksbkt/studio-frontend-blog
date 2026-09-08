import {defineField, defineType} from 'sanity'

export const code = defineType({
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'TypeScript', value: 'typescript'},
          {title: 'TSX', value: 'tsx'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'CSS', value: 'css'},
          {title: 'JSON', value: 'json'},
          {title: 'Markdown', value: 'markdown'},
          {title: 'Bash', value: 'bash'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      language: 'language',
      code: 'code',
    },
    prepare({language, code}) {
      return {
        title: language ? `Code (${language})` : 'Code',
        subtitle: code ? code.slice(0, 80) : '',
      }
    },
  },
})