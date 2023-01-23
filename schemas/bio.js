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
            name: "text",
            title: "Bio text",
            type: "array",
            of: [{type: "block"}]
        }
    ]
}