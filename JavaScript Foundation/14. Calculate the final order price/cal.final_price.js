const calculateTotalCost = (cart) => {
    let totalCost = 0;
    for (let item of cart) {
      totalCost += item.unitPrice * item.quantity;
    }
    return totalCost;
  }