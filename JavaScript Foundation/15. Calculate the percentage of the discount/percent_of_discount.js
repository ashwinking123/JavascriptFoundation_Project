const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    let discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return discountPercentage;
  }