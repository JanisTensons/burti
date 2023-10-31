"use client";
import ProductForm from "../../components/ProductForm";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-blue-500 text-white py-4 w-full text-center">
        <h1 className="text-4xl font-semibold">Product Selection</h1>
      </div>
      <div className="flex justify-center mt-10">
        <ProductForm />
      </div>
    </div>
  );
}
