 class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity=60, fuelConsumption=10) {
      this.name=name;
      this.model=model;
      this.year=year;
      this.color=color;
      this.maxSpeed=maxSpeed;
      this.fuelCapacity=fuelCapacity;
      this.fuelConsumption=fuelConsumption;
    }
    
    getFullName() {
      return this.name+' '+this.model;
    }
  
    getAge() {
      return new Date().getFullYear()-this.year;
    }
  
    changeColor(color) {
      if (color==this.color) {
        return `The car is already painted ${color}`;
      } else {
        this.color=color;
        return `Great choice! Now your car has a ${color} color`;
      }
    }
  
    calculateWay(kilometers, fuel) {
      const wayTime=(kilometers/this.maxSpeed).toFixed(1);
      const fuelNeeded=(kilometers-fuel*100/this.fuelConsumption)*this.fuelConsumption/100;
      if (fuel<10) {
        return 'Fuel level less than 10L';
      };
      if (kilometers<100*(fuel/this.fuelConsumption)) {
        return `The travel time will be ${wayTime}h. Refueling is not required`;
      } else {
        return `The travel time will be ${wayTime}h. ${fuelNeeded}L refueling is required`;
      }
    }
  }
  
  class CarWithOptions extends Car {
    constructor (name, model, year, color, maxSpeed, fuelCapacity=60, fuelConsumption=10, ...options) {
      super (name, model, year, color, maxSpeed, fuelCapacity=60, fuelConsumption=10);
      this.options=[...new Set(options)];
    }
  
    getOptions() {
      return this.options.join(' ');
    }
  }
      
  class RentalCar extends Car {
    constructor (name, model, year, color, maxSpeed, fuelCapacity=60, fuelConsumption=10, pricePerDay) {
      super (name, model, year, color, maxSpeed, fuelCapacity=60, fuelConsumption=10);
      this.price=pricePerDay;
    }
  
    getCost(time) {
      return this.price*time;
    }
  }
  
  class LisingCar extends Car {
    constructor (name, model, year, color, maxSpeed, fuelCapacity=60, fuelConsumption=10, price, percent) {
      super (name, model, year, color, maxSpeed, fuelCapacity=60, fuelConsumption=10);
      this.price=price;
      this.percent=percent;
    }
  
    getCostInMonth (numberOfMonth) {
      return (this.price*((this.percent/1200)+(this.percent/1200)/(Math.pow(1+(this.percent/1200), numberOfMonth)-1))).toFixed(2);
    }
  
    getAllCost (numberOfMonth) {
      return ((numberOfMonth)*(this.price*((this.percent/1200)+(this.percent/1200)/(Math.pow(1+(this.percent/1200), numberOfMonth)-1)))).toFixed(2);
    }
  }
  
  const newCar=new Car("CarName 1", "CarModel 1", 1990, "red", 180);
  const newCarWithOptions=new CarWithOptions("CarName 2", "CarModel 2", 2000, "yellow", 220, 60, 5, "conditioner", "sport seat");
  const newRentalCar=new RentalCar("CarName 3", "CarModel 3", 2010, "gunmetal", 240, 60, 12, 126);
  const newLisingCar=new LisingCar("CarName 4", "CarModel 4", 2021, "white", 240, 60, 15, 100000, 14);