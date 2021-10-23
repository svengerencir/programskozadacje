let stringy = "";
for (let i=1;i<101;i++){
    stringy= !(i%3)?(!(i%5)?"FizzBuzz":"Fizz"):!(i%5)?"Buzz":i;
    console.log(stringy);
}