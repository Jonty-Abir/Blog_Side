export default function newsLatter() {
 
  return (
    <section className="bg-gray-50 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bold text-3xl">Subscribe Newlatter</h1>
        <div className="py-4">
          <input
            type="text"
            className="shadow-md border rounded focus:outline-none w-9/12 px-3 py-3 text-gray-700  focus:shadow-outline"
            placeholder="enter your email"
          />
        </div>
        <button className="bg-orange-400 px-20 py-3 rounded-full text-gray-50">Subscribe</button>
      </div>
    </section>
  );
}
