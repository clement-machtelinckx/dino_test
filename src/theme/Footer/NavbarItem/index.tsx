import React from "react";
import NavbarItem from "@theme-original/NavbarItem";
import type NavbarItemType from "@theme/NavbarItem";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof NavbarItemType>;

export default function NavbarItemWrapper(props: Props): JSX.Element | null {
    const anyProps = props as unknown as { type?: string };
    const type = anyProps?.type ?? "";

    const isDocsItem =
        type === "doc" ||
        type === "docSidebar" ||
        type === "docsVersion" ||
        type === "docsVersionDropdown" ||
        type === "docsPluginId" ||
        type === "docsVersionDropdownNavbarItem" ||
        type === "docsVersionNavbarItem";

    if (isDocsItem) return null;

    return <NavbarItem {...props} />;
}
