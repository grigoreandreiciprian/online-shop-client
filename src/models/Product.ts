
export default interface Product {
    id?: number | null;
    name: String;
    price: Number;
    weight: Number;
    category: String;
    create_date: String;
    stock: number;
    picture: Blob
}