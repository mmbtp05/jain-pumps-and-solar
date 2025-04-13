'use client'

import ProductListing from "@/app/(components)/products/listing/layout";
import { summersibleProductCategories, summersibleProducts } from "@/app/(constants)/productListing/pumps";


const SummersiblePumps = () => {
    return (
        <ProductListing
            categories={summersibleProductCategories}
            products={summersibleProducts}
            breadcrumbs={[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Borewell Submersible Pumps" }
            ]}
            heading="Submersible Pumps"
        />
    );
}

export default SummersiblePumps;