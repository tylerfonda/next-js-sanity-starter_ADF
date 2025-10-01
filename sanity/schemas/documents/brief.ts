import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'brief',
  title: 'Brief',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dueAt',
      title: 'Due At',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
