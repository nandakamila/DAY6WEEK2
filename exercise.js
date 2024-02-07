/*
1. Create a function to calculate array of student data. The object has this following properties :
    ○ Name → String
    ○ Email → String
    ○ Age → Date
    ○ Score → Number
● Parameters : array of student
● Return values :
    ○ Object with this following properties :
        ■ Score
            ● Highest
            ● Lowest
            ● Average
        ■ Age
            ● Highest
            ● Lowest
            ● Average
*/

class CalculateData {
    constructor() {}

    static highestScore(array) {
        return Math.max(...array);
    }

    static lowestScore(array) {
        return Math.min(...array);
    }

    static averageScore(array) {
        let total = 0; 
        for(let i = 0; i < array.length; i++) {
            total += array[i]; 
        }
        return total / array.length; 
    }

    static sortAge(sort, date, name) {
        let age = Date.parse(date[0]);
        let youngest = 0;
        let oldest = 0
        if(oldest<youngest){
            oldest=youngest;
            youngest=oldest;
        } 

        for(let i = 2; i < date.length; i++) {
            if(age<Date.parse(date[i])) oldest=i;
            if(youngest>Date.parse(date[i])) youngest=i;
        }

        if(sort==='oldest') return name[oldest];
        if(sort==='youngest') return name[youngest];
    }

    static averageAge(birthday) {
        let birthTime = Date.parse(birthday[0]);
        let ages=[];
        const nowTime = Date.now(); 

        for(let i=0;i<birthday.length;i++){
            const diff = nowTime - birthTime;
            const ageDate = new Date(diff); 
            const age = ageDate.getUTCFullYear() - 1970;
            ages.push(age);
        }

        let total = 0; 
        for(let i = 0; i < birthday.length; i++) {
            total += ages[i]; 
        }
        return total / birthday.length; 
    }
}

students = {
    name:['Budi', 'Toni', 'Joko','Dono'],
    email:['budi@gmail.com','toni@gmail.com', 'joko@gmail.com','dono@gmail.com'],
    age:['10-Jan-1995', '12-Dec-1993', '1-Sep-2000', '15-Sep-1999'],
    score:[82,68,97,36]
}

console.log(`The highest score is ${CalculateData.highestScore(students.score)}`);
console.log(`The lowest score is ${CalculateData.lowestScore(students.score)}`);
console.log(`The average score is ${CalculateData.averageScore(students.score)}`);

console.log(`The oldest is ${CalculateData.sortAge('oldest', students.age, students.name)}`);
console.log(`The youngest is ${CalculateData.sortAge('youngest', students.age, students.name)}`);
console.log(`The average age is ${CalculateData.averageAge(students.age)}`);

/*
2. Create a program to create transaction
    ● Product Class
        ○ Properties
            ■ Name
            ■ Price
    ● Transaction Class
        ○ Properties
            ■ Total
            ■ Product
    ● All product data
    ● Qty
        ○ Add to cart method → Add product to transaction
        ○ Show total method → Show total current transaction
        ○ Checkout method → Finalize transaction, return transaction data
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    constructor() {
        this.total = 0;
        this.products = [];
        this.quantities = [];
    }
    
    addToCart(product, quantity) {
        this.products.push(product);
        this.quantities.push(quantity);


        this.total += product.price * quantity;
    }

    showTotal() {
        console.log(`Your total : ${this.total}`);
    }

    checkout() {
        console.log("Transaction Completed.");
        let transactionData = {
            total: this.total,
            products: this.products,
        };
        return transactionData;
    }

}

const kerang = new Product("Kerang", 25000);
const kepiting = new Product("Kepiting", 90000);
const udang = new Product("Udang", 45000);

const newTransaction = new Transaction();
newTransaction.addToCart(kerang, 4);

newTransaction.showTotal();

const completedTransaction = newTransaction.checkout();
console.log(completedTransaction);
