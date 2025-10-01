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
    // ... any other fields ...
    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      of: [{type: "reference", to: [{type: "source"}]}],
    }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
