if(3==3){
console.log("hello");
}

function makeCoffee(type) {
  switch (type) {
    case 'espresso':
      console.log('Making an espresso...');
      break;
    case 'latte':
      console.log('Making a latte...');
      break;
    case 'cappuccino':
      console.log('Making a cappuccino...');
      break;
    default:
      console.log('Unknown coffee type');
  }
}

makeCoffee('latte');
