import StarRating from "@/components/global/StarRating";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="border p-6 flex flex-col gap-4 drop-shadow-md shadow-md duration-500 rounded">
        <div>
          <Link href={`/products/${product.id}/product-details`}>
            <Image
              className="w-full aspect-square object-contain rounded-md"
              src={"https://placehold.co/300x300/png"}
              height={300}
              width={300}
              alt={product.title}
            />
          </Link>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">
            <Link className="hover:text-primary duration-200" href={"#"}>
              {product?.brand}
            </Link>
          </p>
          <Link href={`/products/${product.id}/product-details`}>
            <h2 className="text-lg font-medium line-clamp-1 hover:text-primary duration-200 py-3">
              {product?.title}
            </h2>
          </Link>
          <div className="flex gap-3 items-center">
            <StarRating defaultRating={product?.rating} />
          </div>
          <div className="flex items-center gap-3">
            <p className="line-through text-lg text-gray-500 font-medium">
              ${(product.price + 5).toFixed(2)}
            </p>
            <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
