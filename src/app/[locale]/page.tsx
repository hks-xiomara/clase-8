import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Index() {
  const t = useTranslations("Index");
  const locale = useLocale();

  return (
    <main>
      <h1 className="py">
        {t("title")}
      </h1>
      <h2>
        {`${t("selected")}: ${locale}`}
      </h2>
      <Link href={`${locale}/testView`}>
        {t("link")}
      </Link>
    </main>
  );
}
