const sanitize = (input) => {
    return input.replace(/\s/g, '_').replace(/\W/g, '');
}

/**
 * https://ec.europa.eu/transparency/regdoc/rep/3/2016/EN/3-2016-4180-EN-F1-1-ANNEX-1.PDF
 * https://www.centralbank.ie/regulation/anti-money-laundering-and-countering-the-financing-of-terrorism/guidance-on-risk
 * @param {*} random 
 */
const country = ( random ) => {
    const tierOne = [
        'America', 'Ireland', 'Japan', 'United Kingdom', 'Canada', 'Germany', 'France'
    ];
    const tierTwo = [
        'China', 'Russia', 'South Africa', 'Egypt', 'Nigeria', 'Columbia', 'Brazil'
    ];
    const tierThree = [
        'North Korea', 'Iran', 'Iraq', 'Afghanistan', 'Syria', 'Uganda', 'Laos'
    ];
    const randomInt = random.int(1,100);
    const pick = random.int(0,6);
    let country = '';
    // 1 in 100 chance
    if((randomInt === 1)){
        country = tierThree[pick];
    } else if(randomInt <= 10){
        country = tierTwo[pick];
    } else {
        country = tierOne[pick]
    }
    return country;
}

module.exports = class Person {
    constructor({
      faker, random
    }) {
      this.faker = faker;
      this.random = random;
      this.firstName = sanitize(faker.name.firstName());
      this.lastName = sanitize(faker.name.lastName());
      this.jobTitle = faker.name.jobTitle();
      this.companyName = faker.company.companyName();
      this.country = country( random );
    } 

    
    toObject() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            jobTitle: this.jobTitle,
            companyName: this.companyName,
            country : this.country
        }
    }

}