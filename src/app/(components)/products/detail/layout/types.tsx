export interface ProductFeature {
    text: string;
}

export interface ProductImage {
    src: string;
    alt: string;
}

export interface TableColumn {
    key: string;
    header: string;
}

export interface TableRow {
    [key: string]: string | number;
}

export interface ProductTable {
    title: string;
    columns: TableColumn[];
    rows: TableRow[];
}

export interface Product {
    id: string;
    name: string;
    description: string;
    images: ProductImage[];
    features: ProductFeature[];
    tables: ProductTable[];
}