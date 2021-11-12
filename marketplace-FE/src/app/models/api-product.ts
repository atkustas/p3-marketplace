export class ApiProduct {

    price:number;
    description:string;
    functionality:string[]
    image:string;

    constructor(price:number, description:string, functionality:string[], image:string){
        this.price = price;
        this.description = description;
        this.functionality = functionality;
        this.image = image;
    }

}
