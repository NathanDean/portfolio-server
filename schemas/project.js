import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default {
    name: "project",
    title: "Projects",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        orderRankField({type: "category"}),
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "image",
            title: "Image",
            type: "image"
        },
        {
            name: "shortDescription",
            title: "Short Description",
            type: "text"
        },
        {
            name: "longDescription",
            title: "Long Description",
            type: "array",
            of: [{type: "block"}]
        },
        {
            name: "appLink",
            title: "App link",
            type: "string"
        },
        {
            name: "gitHubLink",
            title: "GitHub link",
            type: "string"
        },
        {
            name: "projectLanguages",
            title: "Languages",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [
                        {type: "language"}
                    ]
                }
            ]
        }
    ]
}