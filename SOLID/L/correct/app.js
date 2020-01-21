class Product  {
	constructor (name, price) {
		this.name = name;
		this.price = price;
	}
	
	save(storage) {
		storage.store ({name : this.name, price : this.price});
		return storage.length;
	}
}

class ProductStorage {
	constructor (){
		this.products = [];
	}
	get length () {
		return this.products.length;
	}
	store (product) {
		this.products.push (product);
	}
}

let products = [
      {name : 'Physics', price : 100},
      {name : 'Maths', price : 200},
      {name : 'English', price : 400, discount : 50}
];

insertAll(products);

function insertAll (products) {
	let storage = new ProductStorage();
	for (let p of products) {
		let product;
		if (p.discount) {
			product = new DiscountProduct(p.name, p.price, p.discount);
		} else {
			product = new Product (p.name, p.price);
		}
		
		let count = product.save (storage);
		console.log (`Product inserted. ${count} products in total`);
	}
}


class DiscountProduct extends Product{
	constructor (name, price, discount) {
		super(name, price);
		this.discount = discount;
	}
	
	save(storage) {
		let discounted = ({
							name : this.name,
							price : this.price - (this.price * this.discount)
						}); // Similar to product contract
		storage.store(discounted);
		return storage.length; // save method's contract should be same as its base class in this case.
	}
}

