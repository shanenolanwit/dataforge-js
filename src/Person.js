const sanitize = (input) => {
    return input.replace(/\s/g, '_').replace(/\W/g, '');
}

const country = ( random ) => {
    const tierOne = [
        'America', 'Canada', 'Ireland', 
        'England', 'Scotland', 'Wales', 'Poland'
    ];
    const tierTwo = [
        'Romania', 'Brazil', 'Japan', 'Portugal',
        'South Africa', 'Spain', 'Switzerland'
    ];
    const tierThree = [
        'Zimbabwe', 'Nigeria', 'China', 
        'Russia', 'Columbia', 'Turkey', 'Ukraine'
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