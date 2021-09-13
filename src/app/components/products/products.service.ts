import { Injectable } from '@angular/core';

@Injectable()


export class ProductsService {

  private products: any[] = [
    {id: 1045, brand: "colourpop", name:"No Filter Foundation", price: 12, currency: "CAD", image_link: "https://cdn.shopify.com/s/files/1/1338/0845/products/foundations-lineup_800x1200.jpg?v=1528927785"},
    {id: 1043, brand: "deciem", name:"Serum Foundation", price: 6.7, currency: "CAD", image_link: "https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-serum-foundation-30-r-30ml.png?v=6ab9fcb8ca2abb9828afcf9dcdad9f94"},
    {id: 1042, brand: "deciem", name:"Coverage Foundation", price: 6.9, currency: "CAD", image_link: "https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-coverage-foundation-33-n-30ml.png?v=daa322f179d80e450613c75826602292"},
    {id: 1039, brand: "w3llpeople", name:"Realist Invisible Setting Powder", price: 10, currency: "USD", image_link: "https://www.purpicks.com/wp-content/uploads/2018/06/w3llpeople-Realist-Invisible-Setting-Powder.jpg"}
  ];

GetProducts(){
  return this.products;
}
  
}
