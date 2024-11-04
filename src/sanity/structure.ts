import { PenSquare } from "lucide-react";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Dashboard")
    .items([
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
                    .child((authorId: any) =>
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
                    .child((categoryId: any) =>
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

      S.documentTypeListItem("user").title("Users"),

      // S.documentTypeListItem("post").title("Posts"),
      // S.documentTypeListItem("category").title("Categories"),
      // S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["post", "category", "author", "header", "user"].includes(
            item.getId()!,
          ),
      ),
    ]);
