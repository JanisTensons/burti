import React, { useState } from "react";
import productsData from "../data/products.json";
import { Product, Variety, VarietyOption } from "../types";

const ProductForm: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [selectedVariations, setSelectedVariations] = useState<{
    [key: string]: string;
  }>({});

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const productCode = event.target.value;

    const product = productsData.items.find(
      (item: Product) => item.code === productCode
    );

    setSelectedProduct(product);
    setSelectedVariations({});
  };

  const handleVariationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setSelectedVariations((prevVariations) => ({
      ...prevVariations,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 mt-10 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <select
          onChange={handleProductChange}
          className="w-full border p-2 rounded-md"
        >
          <option value="">Select a product</option>
          {productsData.items.map((item: Product) => (
            <option key={item.code} value={item.code}>
              {item.description}
            </option>
          ))}
        </select>
      </div>

      {selectedProduct && (
        <div>
          <p className="text-center text-xl mb-4">
            Selected Product: {selectedProduct.description}
          </p>
          <div className="space-y-4">
            {selectedProduct.varieties.map((varietyCode, index) => {
              const selectedVariety = productsData.varieties.find(
                (variety: Variety) => variety.code === varietyCode
              );

              const isPreviousVarietySelected =
                index === 0 ||
                selectedVariations[selectedProduct.varieties[index - 1]];

              if (selectedVariety) {
                return (
                  <div key={index}>
                    <select
                      name={varietyCode}
                      onChange={handleVariationChange}
                      disabled={!isPreviousVarietySelected}
                      className={`w-full border p-2 rounded-md ${
                        isPreviousVarietySelected ? "" : "text-gray-500"
                      }`}
                    >
                      <option value="">Select a variation</option>
                      {selectedVariety.options.map((option: VarietyOption) => (
                        <option key={option.code} value={option.code}>
                          {option.description}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <p className="text-center mt-6">
            Product Code:{" "}
            <span className="font-semibold">
              {`${selectedProduct.code}.${Object.values(
                selectedVariations
              ).join(".")}`}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductForm;
