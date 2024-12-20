console.log("Hello, World!");

function getCoffee(type) {
  switch (type.toLowerCase()) {
    case 'espresso':
      return 'Here is your Espresso!';
    case 'latte':
      return 'Here is your Latte!';
    case 'cappuccino':
      return 'Here is your Cappuccino!';
    case 'americano':
      return 'Here is your Americano!';
    default:
      return 'Sorry, we do not have that type of coffee.';
  }
}

// Example usage:
console.log(getCoffee('Latte')); // Output: Here is your Latte!

