const currencyCode = ( faker, random ) => {
    const randomInt = random.int(1,50);
    let code = 'EUR';
    if(randomInt <= 10){
        code = faker.finance.currencyCode();
    } else if(randomInt <= 30){
        code = 'USD';
    }
    return code;
}

const amount = ( random ) => {
    let amount = 100;
    const randomInt = random.int(1,1000);
    if(randomInt === 1){
        amount = random.int(1,10);
    } else if(randomInt === 1000){
        amount = random.int(10000, 100000);
    } else if(randomInt <= 10){
        amount = random.int(5000, 15000)
    } else {
        amount = random.int(1,10000)
    }
    return amount;
}

module.exports = class Transaction {
    constructor({
      sender, recipient, faker, random
    }) {
      this.faker = faker;
      this.random = random;
      this.sender = sender;
      this.recipient = recipient;
      this.date = Date.now();
      this.sourceAccountName = faker.finance.accountName();
      this.targetAccountName = faker.finance.accountName();
      this.sourceIban = faker.finance.iban();
      this.sourceBic = faker.finance.bic();
      this.targetIban = faker.finance.iban();
      this.targetBic = faker.finance.bic();
      this.currencyCode = currencyCode( faker, random );
      this.amount = amount( random );
    } 

    toObject(){
        return {
            sender: this.sender.toObject(),
            recipient: this.recipient.toObject(),
            date: this.date,
            sourceAccountName: this.sourceAccountName,
            targetAccountName: this.targetAccountName,
            sourceIban: this.sourceIban,
            sourceBic: this.sourceBic,
            targetIban: this.targetIban,
            targetBic: this.targetBic,
            currencyCode: this.currencyCode,
            amount: this.amount
        }  
    }
}