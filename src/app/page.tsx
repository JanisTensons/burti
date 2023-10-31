"use client";
import ProductForm from "../../components/ProductForm";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="text-blue-950 py-4 w-full text-center">
        <h1 className="text-4xl font-semibold mt-10">Product Selection</h1>
      </div>
      <div className="flex justify-center mt-10">
        <ProductForm />
      </div>
      <div className="bg-white text-blue-950 text-sm py-2 w-full text-center fixed bottom-0">
        <p>Made by Janis Tensons | 2023</p>
      </div>
    </div>
  );
}
