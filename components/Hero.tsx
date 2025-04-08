export default function Hero() {
  return (
    <div className="flex flex-col justify-center bg-[url(/asset/heroimg.jpg)] absolute inset-x-0 w-full object-cover object-center h-96 top-0 -z-50">
      <div className="relative z-10 mx-5 gap-2 flex flex-col lg:mx-28">
        <div className="font-poppins font-bold text-xl text-primary">
          Welcome!
        </div>
        <div className="font-poppins font-bold text-3xl text-primary">
          We Serve the richest coffee in the city
        </div>
        <button className="bg-primary text-dark text-sm py-2 px-5 rounded-3xl mt-2 w-fit">
          Order Now
        </button>
      </div>
    </div>
  );
}
