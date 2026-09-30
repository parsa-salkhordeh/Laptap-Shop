import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="px-4 py-10">
      {/* تیتر */}

      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
          درباره فروشگاه ما
        </h1>

        <p className="leading-8 text-gray-600">
          ما تلاش می‌کنیم خرید لپ‌تاپ را ساده، مطمئن و لذت‌بخش کنیم؛ با ارائه
          محصولات باکیفیت و اطلاعات دقیق، تا بتوانید انتخابی مناسب با نیاز خود
          داشته باشید.
        </p>
      </div>

      {/* عکس‌ها و نوشته‌ها */}

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8  md:items-start">
        {/* عکس راست */}
        <div className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-lg md:mt-12">
          <Image
            src="/AboutUs/hp.jpg"
            alt="محصولات فروشگاه"
            width={300}
            height={300}
            className="h-64 w-full rounded-2xl object-cover"
          />

          <h2 className="mt-5 text-xl font-bold text-gray-900">تنوع محصولات</h2>

          <p className="mt-3 leading-7 text-gray-600">
            مجموعه‌ای متنوع از لپ‌تاپ‌ها برای کار، تحصیل، برنامه‌نویسی و استفاده
            روزمره.
          </p>
        </div>

        {/* عکس وسط */}
        <div className="relative z-10 w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl md:-mt-5">
          <Image
            src="/AboutUs/hp2.jpg"
            alt="لپ‌تاپ فروشگاه"
            width={300}
            height={300}
            className="h-80 w-full rounded-2xl object-cover"
          />

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            انتخابی مطمئن
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            با ارائه اطلاعات کامل و شفاف، انتخاب لپ‌تاپ مناسب را برای شما
            آسان‌تر می‌کنیم.
          </p>
        </div>

        {/* عکس چپ */}
        <div className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-lg md:mt-12">
          <Image
            src="/AboutUs/hp3.jpg"
            alt="خدمات فروشگاه"
            width={300}
            height={300}
            className="h-64 w-full rounded-2xl object-cover"
          />

          <h2 className="mt-5 text-xl font-bold text-gray-900">
            همراه شما هستیم
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            از انتخاب محصول تا خرید، تلاش می‌کنیم تجربه‌ای ساده و رضایت‌بخش برای
            شما ایجاد کنیم.
          </p>
        </div>
      </div>
    </section>
  );
}
