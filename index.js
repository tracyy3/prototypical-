function Person(
  firstName,
  lastName,
  favoriteColor,
  favoriteNumber,
  favoriteFoods
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
  this.family = [];
}

Person.prototype = {
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  toString: function () {
    return `${this.fullName()}, Favorite Color: ${
      this.favoriteColor
    }, Favorite Number: ${this.favoriteNumber}`;
  },
  addToFamily: function (person) {
    if (person instanceof Person && !this.family.includes(person)) {
      this.family.push(person);
    } else {
      console.log(
        "Cannot add to family, the person either does not exist or is already in the family."
      );
    }
    return this.family.length;
  },
};

let peter = new Person("Peter", "Oleary", "Green", 42, ["pasta", "pizza"]);
console.log(peter.fullName());
console.log(peter.toString());

let Tracy = new Person("Tracy", "Yang", "White", 3, ["pho", "icecream"]);
console.log(peter.addToFamily(Tracy));
// console.log(peter.addToFamily('string'));
