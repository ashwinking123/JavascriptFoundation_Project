function calculateRentalCost(daysRented, carType) {
    let costPerDay = 0;
    switch (carType) {
      case 'economy':
        costPerDay = 4000;
        break;
      case 'midsize':
        costPerDay = 10000;
        break;
      case 'luxury':
        costPerDay = 20000;
        break;
      default:
        return 'Invalid car type';
    }
    let totalCost = daysRented * costPerDay;
    return totalCost;
  }