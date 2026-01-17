export default function ProductCard({product}) {
    return (
               <div>
           <article
                            key={product.id}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
                        >
                            <div className="aspect-square p-6 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="max-h-full object-contain"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-5 border-t">
                                <h3 className="font-semibold text-gray-900 line-clamp-2">
                                    {product.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-bold text-indigo-600">
                                        ${product.price}
                                    </span>

                                  
                                </div>
                            </div>
                        </article>
        </div>
    );
}