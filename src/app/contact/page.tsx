import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-16 md:flex-row">
        
      {/* تصویر */}
      <div className="w-full md:w-1/2">
        <Image
          src="/ContactUs/contact.png"
          alt="عکس فروشگاه"
          width={600}
          height={600}
          className="w-full md:h-125 rounded-3xl object-cover shadow-xl"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h1 className="mb-3 text-3xl font-bold text-gray-800">
          با ما در ارتباط باشید
        </h1>

        <p className="mb-8 leading-7 text-gray-500">
          برای دریافت اطلاعات بیشتر، پیگیری سفارش یا پرسیدن سوالات خود می‌توانید
          از طریق راه‌های ارتباطی زیر با ما در تماس باشید.
        </p>

        <div className="space-y-4">
          {/* Instagram */}
          <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-4 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              📸
            </div>

            <div>
              <p className="text-sm text-gray-500">اینستاگرام</p>
              <p className="font-semibold text-gray-800">@LaptopStore</p>
            </div>
          </div>

          {/* Telegram */}
          <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-4 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              ✈️
            </div>

            <div>
              <p className="text-sm text-gray-500">تلگرام</p>
              <p className="font-semibold text-gray-800">@LaptopStore</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-4 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              📧
            </div>

            <div>
              <p className="text-sm text-gray-500">ایمیل</p>
              <p className="font-semibold text-gray-800">
                laptopstore@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 rounded-2xl bg-gray-100 p-4 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              📞
            </div>

            <div>
              <p className="text-sm text-gray-500">شماره تماس</p>
              <p className="font-semibold text-gray-800">09123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
