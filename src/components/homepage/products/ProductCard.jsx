import StarRating from "@/components/global/StarRating";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProductCard = ({ product, view }) => {
  const pathname = usePathname();

  if (pathname.includes("/homepage" || "/cart")) {
    view = "grid";
  }

  return (
    <>
      <div
        className={cn(
          "border p-4 md:p-6 flex gap-4 hover:drop-shadow-md hover:shadow-md duration-300 rounded bg-secondary",
          view === "grid" && "flex-col",
          view === "list" && "flex-row"
        )}
      >
        <div className="relative basis-2/5 md:basis-1/3">
          <Link href={`/products/${product.id}/product-details`}>
            <Image
              className="w-full h-full aspect-square object-contain p-1 rounded-md bg-white dark:bg-black"
              src={"https://placehold.co/300x300/png"}
              // src={product?.thumbnail}
              height={900}
              width={900}
              alt={product.title}
            />
          </Link>
          {product?.discountPercentage >= 1 && (
            <div className="bg-red-500 absolute px-1 font-medium text-white py-.5 text-xs md:text-sm rounded top-2 right-2">
              -{product?.discountPercentage.toFixed(0)}%
            </div>
          )}
        </div>
        <div className="space-y-2 basis-3/5 md:basis-2/3">
          <p className="text-xs md:text-sm font-medium line-clamp-1">
            <Link className="hover:text-primary duration-200" href={"#"}>
              {product?.brand}
            </Link>
          </p>
          <Link href={`/products/${product.id}/product-details`}>
            <h2 className="text-base md:text-lg font-medium line-clamp-1 leading-relaxed hover:text-primary duration-200 my-3 ">
              {product?.title}
            </h2>
          </Link>
          <div className="flex gap-3 items-center">
            <StarRating defaultRating={product?.rating} />
          </div>
          <div className="flex items-center gap-3 text-base md:text-lg">
            <p className="line-through  text-gray-500 font-medium">
              ${(product.price + 5).toFixed(2)}
            </p>
            <p className=" font-semibold">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
