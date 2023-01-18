export default {
    name: "bio",
    title: "Bio",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image"
        },
        {
            name: "bio",
            title: "Bio",
            type: "array",
            of: [{type: "block"}]
        }
    ]
}