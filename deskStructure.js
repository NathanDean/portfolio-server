import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list"
import { NoChanges } from "sanity"

export default (S, context) => {
    return S.list()
        .title('Content')
        .items([
            S.listItem()
                .title("Bio")
                .icon(false)
                .child(
                    S.documentTypeList("bio")
                ),
            orderableDocumentListDeskItem({
                type: "project",
                title: "Projects",
                icon: false,
                S,
                context}),
            S.listItem()
            .title("Languages")
            .icon(false)
            .child(
                S.documentTypeList("language")
            )
        ])
}