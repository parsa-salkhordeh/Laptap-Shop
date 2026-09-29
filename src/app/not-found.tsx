import Link from "next/link";
import Image from "next/image";
export default function NotFound() {
  return (
    <div
      className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center"
      dir="rtl"
    >
      <div className="mb-8 rounded-3xl bg-gray-100 p-5 shadow-sm">
        <Image
          src="/NotFound/not-found.jpg"
          alt="404"
          width={220}
          height={220}
          className="rounded-2xl object-contain"
        />
      </div>

      <h1 className="text-7xl font-extrabold tracking-tight text-gray-900">
        404
      </h1>

      <p className="mt-4 text-xl font-semibold text-gray-700">
        صفحه مورد نظر پیدا نشد
      </p>

      <Link
        href="/"
        className="mt-7 rounded-xl bg-gray-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gray-700"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
