export class CartModel{
cartId!:number;
userId!:number;
bookId!:number;
quantity!:number;

constructor(userId:number,bookId:number,quantity:number,){
    this.userId=userId;
    this.bookId=bookId;
    this.quantity=quantity;
}
}