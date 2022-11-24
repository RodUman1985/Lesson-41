// Promise - предназначен для выполнения js-операций в асинхронном режиме
const p = new Promise((resolve,reject)=>{
// resolve и reject - это функции
// мы вызываем resolve() если код внутри лямбды выполнился успешно, в противном случае вызываем функцию reject()
setTimeout(()=>{console.log ('Hello from Promise');
//resolve([1,2,3,4]);// успешно
reject('что-то пошло не так');// с ошибкой
},1000);

});
p.then((arr)=>{
  console.log(arr)  // эта лямбда вызовется тогда , когда внутри тела Promise будет вызванна функция resolve
  return arr.reduce((p,c)=>p+c);
}).catch((err)=>{
    // эта лямбда вызовется тогда , когда внутри тела Promise будет вызванна функция rejet
    console.log(err)

})
.then((a)=>{
    console.log(a);
    throw'Пипец!!!'
}).catch((err)=>console.log(err)); // вызов метода then внутри объекта Promise запускает его код на выплолднение
console.log('Hello MF')
//await и async
async function test(){
    console.log('Test');
    return 'Hailo!!!!';// resolve('Hailo!!!!')
};
// async-функция всегда возвращает объект Promise
const w=test();
w.then((a)=>console.log(a));
//await - заствыляет ждать  выполнения  Promise (вызова функции resolve())
//await нельзя использовать вне контекста асинхронной фцнкции. Т.е можно использовать ТОЛЬКО внутри асиннхронной функции либо лямбды
async function test2() {
    const v = await test();
    console.log(v);
}
test2();
console.log(w);
//http, https
// Hyper Text Transfer Protocol
//Hyper Text Transfer Protocol (Sequrity)
// xml
//JSON - JavaScript Object Notation 
/*
{} - задают объект
[] -  задают массив
 внутри{}:
 свойства (только!)
  {
    "name":"Vasia",- строка, строго в двойных ковычках
    "age": 35, - число, без ковычек
    "drinks": ["pivo","Vodka","samogon"], - массив (не строготипизированный)
    "isAdmin":true/false,
    "photo":null,
    "order": {
        "product":"meet",
        "price": 12.22
    } 
  }
*/ 
// JSON -> JavaScript Odject
const s = `{"age":12,"name": "Vasya"}`;
const user = JSON.parse(s);
console.log(user);
//JavaScript Odject->JSON
const cat = {
    age: 12,
    color: 'red',
    vac:['Sputnic-V','t',1,true]
}
const j = JSON.stringify(cat);
console.log(j);