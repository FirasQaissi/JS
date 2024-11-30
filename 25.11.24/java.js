const now = new Date()
console.log(now);
console.log(typeof now);
console.log(now.toString());

console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());


console.log(now.toLocaleTimeString());
console.log(now.toLocaleDateString());








setInterval(() => {
    let israelTime = new Date();
    israelTime.setHours(israelTime.getHours());
    let newTime = document.getElementById("time1");
    newTime.innerHTML = israelTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    let parisTime = new Date();
    parisTime.setHours(parisTime.getHours() - 1);
    let newTime2 = document.getElementById("time2");
    newTime2.innerHTML = parisTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    let usaTime = new Date();
    usaTime.setHours(usaTime.getHours() - 7);
    let newTime3 = document.getElementById("time3");
    newTime3.innerHTML = usaTime.toLocaleTimeString();
}, 1000)


setInterval(() => {
    let bangkok = new Date();
    bangkok.setHours(bangkok.getHours() + 5);
    let newTime4 = document.getElementById("time4");
    newTime4.innerHTML = bangkok.toLocaleTimeString();
}, 1000) 