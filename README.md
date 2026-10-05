# 💻 laptop-shop

یک فروشگاه آنلاین با MongoDB , NextJs , TypeScript
هدف این پروژه، پیاده‌سازی یک فروشگاه مدرن با قابلیت مدیریت محصولات، سبد خرید، احراز هویت کاربران و ارتباط با دیتابیس است.


## تکنولوژی ها:

* **Next.js** – ساخت صفحات و مدیریت Routing
* **Next.js App Router** – ساختار صفحات و مسیرهای پروژه
* **TypeScript** – Type Safety
* **Tailwind CSS** – طراحی و استایل‌دهی
* **MongoDB** – ذخیره اطلاعات محصولات و کاربران
* **Context API** – مدیریت وضعیت سبد خرید
* **Font Awesome** – آیکون‌های رابط کاربری
* **React Hot Toast** – نمایش پیام‌های موفقیت و خطا
* **bcryptjs** – Hash کردن رمز عبور کاربران
* 

## قابلیت ها

*  نمایش محصولات لپ‌تاپ
*  مشاهده جزئیات هر محصول
*  اضافه کردن محصول به سبد خرید
*  حذف محصول از سبد خرید
*  مدیریت تعداد محصولات در سبد خرید
*  نمایش Toast برای عملیات مختلف
*  ثبت‌نام کاربران
*  Hash کردن رمز عبور قبل از ذخیره در دیتابیس
*  ذخیره اطلاعات در MongoDB
*  طراحی Responsive برای موبایل و دسکتاپ
*  صفحات مختلف مانند:

  * Home
  * Products
  * Product Details
  * Cart
  * About Us
  * Contact Us
  * Sign Up
  * 404 Not Found

## ثبت‌ نام کاربران

در حال حاضر بخش **Sign Up** پیاده‌سازی شده است.
و بزودی پنل ادمین و **sign in** پیاده سازی میشوند
اطلاعات کاربر از طریق API به سرور ارسال شده و در MongoDB ذخیره می‌شود.
برای امنیت بیشتر، رمز عبور کاربران قبل از ذخیره شدن با `bcryptjs` Hash می‌شود.

قابلیت‌های زیر در برنامه آینده پروژه قرار دارند:

* Sign In
* ثبت‌نام و ورود مستقیم با Google
* Logout
* Admin Panel


## مفاهیم استفاده شده

در این پروژه با مفاهیم مختلفی از **React** و **Next.js** کار شده است:

* Server Components
* Client Components
* SSR
* Dynamic Pages
* API Routes
* Context API
* React Hooks
* `useState`
* `useContext`
* Next Hooks
* `useRouter`
* Responsive Design




## نصب و راه اندازی پروژه

ابتدا پروژه را Clone کنید:

```bash
git clone https://github.com/parsa-salkhordeh/laptop-shop.git
```

وارد پوشه پروژه شوید:

```bash
cd laptop-shop
```

وابستگی‌ها را نصب کنید:

```bash
npm install
```

سپس فایل `.env.local` را ایجاد کرده و Connection String مربوط به MongoDB را قرار دهید:

```env
MONGODB_URI=your_mongodb_connection_string
```

پروژه را اجرا کنید:

```bash
npm run dev
```

سپس در مرورگر باز کنید:

```text
http://localhost:3000
```

## بزودی

قابلیت‌های برنامه‌ریزی‌شده برای نسخه‌های بعدی:

* Sign In
* Google Authentication
* Logout
* Admin Panel
* افزودن محصول توسط Admin
* ویرایش محصولات
* حذف محصولات توسط Admin
* جستجوی محصولات
* فیلتر و دسته‌بندی محصولات


## 👨‍💻 توسعه‌دهنده

**Parsa Salkhordeh**


