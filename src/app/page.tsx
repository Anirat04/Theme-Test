import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitch></ThemeSwitch>
      <button
        className="text-xl font-semibold py-3 px-5 rounded-lg border border-uiGray-300 dark:border-uiGray-500 bg-uiGray-100 dark:bg-uiGray-800 ">
        Button1
      </button>
      <button
        className="text-xl font-semibold py-3 px-5 rounded-lg border border-uiGray-300 dark:border-uiGray-500 bg-uiGray-100 dark:bg-uiGray-800 ">
        Button2
      </button>
      <button
        className="text-xl font-semibold py-3 px-5 rounded-lg border border-uiGray-300 dark:border-uiGray-500 bg-uiGray-100 dark:bg-uiGray-800 ">
        Button3
      </button>
    </main>
  );
}
