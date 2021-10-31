function Car(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;
  }

  Car.prototype.getFullName = function () {
    return this.name + ' ' + this.model;
  }

  Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
  }

  Car.prototype.changeColor = function (color) {
    if (color == this.color) {
      return `The car is already painted ${color}`;
    } else {
      this.color = color;
      return `Great choice! Now your car has a ${color} color`;
    }
  }

  Car.prototype.calculateWay = function (kilometers, fuel) {
    const wayTime = (kilometers / this.maxSpeed).toFixed(1);
    const fuelNeeded = (kilometers - fuel * 100 / this.fuelConsumption) * this.fuelConsumption / 100;
    if (fuel < 10) {
      return 'Fuel level less than 10L';
    };
    if (kilometers < 100 * (fuel / this.fuelConsumption)) {
      return `The travel time will be ${wayTime}h. Refueling is not required`;
    } else {
      return `The travel time will be ${wayTime}h. ${fuelNeeded}L refueling is required`;
    }
  }

  function CarWithOptions(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, ...options) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10);
    this.options = [...new Set(options)];
  }

  CarWithOptions.prototype = Object.create(Car.prototype);
  CarWithOptions.prototype.constructor = CarWithOptions;

  CarWithOptions.prototype.getOptions = function () {
    return this.options.join(' ');
  }

  function RentalCar(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, pricePerDay) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10);
    this.price = pricePerDay;
  }

  RentalCar.prototype = Object.create(Car.prototype);
  RentalCar.prototype.constructor = RentalCar;

  RentalCar.prototype.getCost = function (time) {
    return this.price * time;
  }

  function LisingCar(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10, price, percent) {
    Car.call(this, name, model, year, color, maxSpeed, fuelCapacity = 60, fuelConsumption = 10);
    this.price = price;
    this.percent = percent;
  }

  LisingCar.prototype = Object.create(Car.prototype);
  LisingCar.prototype.constructor = LisingCar;

  LisingCar.prototype.getCostInMonth = function (numberOfMonth) {
    return (this.price * ((this.percent / 1200) + (this.percent / 1200) / (Math.pow(1 + (this.percent / 1200), numberOfMonth) - 1))).toFixed(2);
  }

  LisingCar.prototype.getAllCost = function (numberOfMonth) {
    return ((numberOfMonth) * (this.price * ((this.percent / 1200) + (this.percent / 1200) / (Math.pow(1 + (this.percent / 1200), numberOfMonth) - 1)))).toFixed(2);
  }

  const newCar=new Car("CarName 1", "CarModel 1", 1990, "red", 180);
  const newCarWithOptions=new CarWithOptions("CarName 2", "CarModel 2", 2000, "yellow", 220, 60, 5, "conditioner", "sport seat");
  const newRentalCar=new RentalCar("CarName 3", "CarModel 3", 2010, "gunmetal", 240, 60, 12, 126);
  const newLisingCar=new LisingCar("CarName 4", "CarModel 4", 2021, "white", 240, 60, 15, 100000, 14);
