const currencyCode = ( faker, random ) => {
    const randomInt = random.int(1,1000);
    let code = 'EUR';
    if(randomInt === 1){
        code = faker.finance.currencyCode();
    } else if(randomInt <= 400){
        code = 'USD';
    }
    return code;
}

/**
 * http://www.fatf-gafi.org/media/fatf/documents/reports/Guidance-RBA-money-value-transfer-services.pdf
 * The FATF Recommendations relating to MVTS under Recommendation 14 and its Interpretive
 * include specific requirements for countries with respect to MVTS.
 * R.10 requires financial institutions to conduct CDD measures when carrying out occasional transactions 
 * above the applicable designated threshold (15000)
 * @param {*} random 
 */
const amount = ( random ) => {
    let amount = 100;
    const randomInt = random.int(1,1000);
    if(randomInt === 1){
        amount = random.int(15000, 100000);
    } else if(randomInt <= 10){
        amount = random.int(5000, 15000)
    } else {
        amount = random.int(1,5000)
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