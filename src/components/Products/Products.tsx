import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import BuyBtn from "./BuyBtn";

interface Product {
  image: string;
  _id: string;
  name: string;
  price: number;
  quantity:number;
}

export default async function Products() {

  let data: Product[] = [];

  try {
    const res = await fetch("http://localhost:3000/api/products");
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return (
   <main>
    <section>
      {/* Hero */}
      <div className="flex justify-center font-bold text-2xl bg-gray-100 p-3 text-black">
        <h1 className="text-blue-400">محصولات</h1>
        <FontAwesomeIcon icon={faComputer} className="px-2" />
      </div>

      <div className="flex flex-wrap gap-4 p-4 mt-2">
        {data.map((product: Product) => (
          <div
            key={product._id}
            className="group basis-[calc(50%-8px)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:basis-[calc(25%-12px)]"
          >
            {/* Image */}
            <div className="flex h-40 items-center justify-center bg-gray-50 p-3">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={150}
                unoptimized
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h5 className="line-clamp-1 text-lg font-bold text-gray-800">
                لپتاپ {product.name}
              </h5>

              <p className="mt-2 text-lg font-bold text-green-500">
                {product.price.toLocaleString()} تومان
              </p>

              <div className="mt-4 flex gap-2">
                <Link
                  href={`/Products/${product._id}`}
                  className="flex-1 rounded-xl border border-gray-300 py-2 text-center text-sm font-semibold text-gray-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  جزئیات
                </Link>

                <BuyBtn product={product}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}
