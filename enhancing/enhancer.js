module.exports = {
  success,
  fail,
  repair,
  get,
};



function success(item) {
  if(item.enhancement < 20 && item.enhancement >= 0){
      return { ...item, enhancement: item.enhancement + 1 };
  } else if(item.enhancement === 20){
    return { ...item };
  } else if(item.enhancement > 20){
    return { ...item, enhancement: 20}
  } else if (item.enhancement < 0 ){
    return { ...item, enhancement: 0}
  }

}

function fail(item) {
  const e = item.enhancement
  const d = item.durability

   if(d < 0){
    return { ...item, durability: 0}
  } else if(e < 15){
   return {...item, durability: d - 5}
  } else if(e > 15 && e < 17){
    return { ...item, durability: d - 10 }
  } else if(e > 16 && d > 100){
    return { ...item, enhancement: e - 1, durability: 90 }
  }else if(d === 5 && e > 16){
    return { ...item, durability: 0, enhancement: e - 1}
  } 
  else if (e > 16){
    return { ...item, enhancement: e - 1, durability: d - 10}
  }
}
function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
