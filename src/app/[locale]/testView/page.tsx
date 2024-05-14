import { useTranslations } from "next-intl";

const TestComponent = () => {
  const t = useTranslations("TestView");
  return (
    <>
      <h1>{t("title")}</h1>
    </>
  );
};

export default TestComponent;
