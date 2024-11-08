"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LinkItem, PrimaryMenu } from "@/types";

export function NavMenu({ primaryMenu }: { primaryMenu: PrimaryMenu[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {primaryMenu.map(
          ({ _type, label, highlightList, linkList }, index: number) => {
            return (
              <NavigationMenuItem key={index}>
                {_type === "subMenu" && (
                  <>
                    <NavigationMenuTrigger
                      className="bg-transparent"
                      key={label}
                    >
                      {label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              {highlightList?.featuredTitle && (
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  {highlightList?.featuredTitle}
                                </div>
                              )}

                              {highlightList?.featuredDesc && (
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {highlightList?.featuredDesc}
                                </p>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        </li>

                        {linkList?.map(
                          ({ label, url }: LinkItem, index: number) => (
                            <ListItem key={index} href={url} title={label}>
                              {label}
                            </ListItem>
                          ),
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </>
                )}

                {_type === "navLink" && (
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle())}
                    >
                      {label}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            );
          },
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
