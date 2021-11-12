export class ApiProduct {

    price:number;
    productName:string;
    description:string;
    functionality:string[]
    image:string;

    constructor(price:number, productName:string, description:string, functionality:string[], image:string){
        this.price = price;
        this.productName = productName;
        this.description = description;
        this.functionality = functionality;
        this.image = image;
    }

}
