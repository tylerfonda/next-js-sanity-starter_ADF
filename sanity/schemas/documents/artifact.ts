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
defineField({
  name: "metrics",
  title: "Metrics",
  type: "object",
  fields: [
    defineField({name: "stat", title: "Stat", type: "number"}),
    defineField({name: "unit", title: "Unit", type: "string"}),
  ],
}),
