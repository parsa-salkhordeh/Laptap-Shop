export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" dir="rtl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* معرفی */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-white">لپتاپ خانه</h2>

            <p className="text-sm leading-7 text-gray-400">
              فروشگاه تخصصی لپ‌تاپ با ارائه محصولات متنوع، مشخصات کامل و قیمت
              مناسب.
            </p>
          </div>

          {/* لینک‌های فروشگاه */}
          <div>
            <h3 className="mb-4 font-semibold text-white">فروشگاه</h3>

            <ul className="space-y-3 text-sm">
              <li>همه لپ‌تاپ‌ها</li>
              <li>لپ‌تاپ‌های ایسوس</li>
              <li>لپ‌تاپ‌های لنوو</li>
              <li>محصولات جدید</li>
            </ul>
          </div>

          {/* راهنمای مشتری */}
          <div>
            <h3 className="mb-4 font-semibold text-white">راهنمای مشتری</h3>

            <ul className="space-y-3 text-sm">
              <li>نحوه خرید</li>
              <li>شرایط ارسال</li>
              <li>ضمانت و بازگشت کالا</li>
              <li>سوالات متداول</li>
            </ul>
          </div>

          {/* تماس */}
          <div>
            <h3 className="mb-4 font-semibold text-white">ارتباط با ما</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>📞 ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>📧 info@laptopstore.ir</li>
              <li>📍 تهران، خیابان ولیعصر</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © ۱۴۰۵ لپتاپ خانه — تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
