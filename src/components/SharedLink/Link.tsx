import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";
import { locales } from "@/i18n";

export const localePrefix = "always"; // Default

export const pathnames = {
  "/classic": "/classic",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
