"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label>
      <p className="py">
        Change language
      </p>
      <select
        defaultValue={localActive}
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="de">German</option>
      </select>
    </label>
  );
}
