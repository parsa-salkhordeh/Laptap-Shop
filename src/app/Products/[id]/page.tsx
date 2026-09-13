import Image from "next/image";
interface Product {
  _id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  processor: string;
  ram: number;
  storage: string; // for later
  screen: string;
  image: string;
}

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!res.ok) {
    return <div className="font-bold text-center text-red-500">محصول پیدا نشد</div>;
  }

  const data: Product = await res.json();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <section className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-sm md:flex-row">
        <div className="flex w-full items-center justify-center bg-gray-100 p-8 md:w-1/2">
          <Image
            src={data.image}
            alt={data.name}
            width={450}
            height={240}
            unoptimized
            className="w-auto transition duration-300 hover:scale-105"
          />
        </div>

        {/* اطلاعات محصول */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 lg:p-12">
          {/* دسته بندی */}
          <span className="mb-3 w-fit rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
            {data.category} 
          </span>

          {/* نام محصول */}
          <h1 className="mb-6 text-3xl font-bold leading-relaxed text-gray-900 lg:text-4xl">
             لپتاپ {data.name}
          </h1>

          {/* اطلاعات */}
          <div className="mb-8 flex flex-col divide-y rounded-2xl border border-gray-200">
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-gray-500">برند</span>
              <span className="font-semibold text-gray-900">{data.brand}</span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-gray-500">پردازنده</span>
              <span className="font-semibold text-gray-900">
                {data.processor}
              </span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-gray-500">رم</span>
              <span className="font-semibold text-gray-900">{data.ram} GB</span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-gray-500">حافظه</span>
              <span className="font-semibold text-gray-900">
                {data.storage}
              </span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-gray-500">صفحه‌نمایش</span>
              <span className="font-semibold text-gray-900">{data.screen}</span>
            </div>
          </div>

          {/* قیمت */}
          <div className="mb-6">
            <p className="mb-1 text-2xl text-gray-500">قیمت محصول</p>

            <p className="text-3xl font-bold text-blue-600">
              {data.price.toLocaleString()} تومان
            </p>
          </div>

          {/* دکمه */}
          <button className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold text-white transition hover:bg-blue-700  cursor-pointer">
            افزودن به سبد خرید
          </button>
        </div>
      </section>
    </main>
  );
}
