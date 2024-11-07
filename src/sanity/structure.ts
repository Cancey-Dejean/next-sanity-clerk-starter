import { Menu, PenSquare } from "lucide-react";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Dashboard")
    .items([
      S.listItem()
        .title("Homepage")
        .child(
          S.document()
            .title("Homepage")
            .schemaType("homepage")
            .documentId("homepage"),
        ),

      S.divider(),

      S.listItem()
        .title("Pages")
        .icon(Menu)
        .child(S.documentList().title("All Pages").filter('_type == "page"')),

      S.divider(),

      S.listItem()
        .title("Posts")
        .icon(PenSquare)
        .child(
          S.list()
            .title("Filters")
            .items([
              S.divider(),

              S.listItem().title("All Posts").child(
                /* Create a list of all posts */
                S.documentList().title("All Posts").filter('_type == "post"'),
              ),

              S.divider(),

              S.listItem()
                .title("Posts By Author")
                .child(
                  S.documentTypeList("author")
                    .title("Posts by Author")
                    .child((authorId: string) =>
                      S.documentList()
                        .title("Posts")
                        .filter('_type == "post" && $authorId == author._ref')
                        .params({ authorId }),
                    ),
                ),

              S.divider(),

              S.listItem()
                .title("Posts By Category")
                .child(
                  S.documentTypeList("category")
                    .title("Posts by Category")
                    .child((categoryId: string) =>
                      S.documentList()
                        .title("Posts")
                        .filter(
                          '_type == "post" && $categoryId in categories[]._ref',
                        )
                        .params({ categoryId }),
                    ),
                ),

              S.divider(),
            ]),
        ),

      S.divider(),

      S.listItem()
        .title("Globals")
        .child(
          S.list()
            .title("Global Components")
            .items([
              S.listItem()
                .title("Header")
                .child(
                  S.document()
                    .title("Header")
                    .schemaType("header")
                    .documentId("header"),
                ),

              S.divider(),

              S.listItem()
                .title("Footer")
                .child(
                  S.document()
                    .title("Footer")
                    .schemaType("footer")
                    .documentId("footer"),
                ),
            ]),
        ),

      S.divider(),

      S.documentTypeListItem("user").title("Users"),

      // S.documentTypeListItem("post").title("Posts"),
      // S.documentTypeListItem("category").title("Categories"),
      // S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "homepage",
            "page",
            "post",
            "category",
            "author",
            "header",
            "user",
            "footer",
          ].includes(item.getId()!),
      ),
    ]);
