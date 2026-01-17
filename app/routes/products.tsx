import { useLoaderData } from "react-router";
import ProductCard from "~/component/ProductCard";

/**
 * SERVER-SIDE LOADER (SSR)
 */
export async function loader() {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
        throw new Response("Failed to fetch products", { status: 500 });
    }

    // ✅ Return plain data
    return await res.json();
}

/**
 * COMPONENT (Server render + Client hydrate)
 */
export default function Products() {
    const products = useLoaderData<typeof loader>();

    console.log(products,'thgasiodfjasidoukgb')

    return (
        <div style={{ padding: 24 }}>
            <h1>Products</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((p: any) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
