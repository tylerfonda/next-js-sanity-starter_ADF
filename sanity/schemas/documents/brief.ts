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
