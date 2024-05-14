"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Index() {
  const locale = usePathname()?.split("/")[1];
  const t = useTranslations("Index");

  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`${locale}/testView`}>{t("link")}</Link>
    </>
  );
}
