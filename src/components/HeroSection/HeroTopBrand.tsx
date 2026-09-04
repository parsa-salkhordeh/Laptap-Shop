import TopBrand from "./TopBrand";

export default function HeroTopBrand() {
  return (
    <>
    <section className="flex gap-4 mt-10 justify-center">
      <i className="fa-solid fa-border-all text-5xl text-blue-500"></i>
      <h2 className="mx-3 font-vazir font-bold text-3xl">
        برترین برند های <span className="text-blue-600">لپتاپ </span>
      </h2>
      
    </section>
    <TopBrand/>
    </>
  );
}
