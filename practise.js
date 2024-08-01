// let john = {
// firstName:"John",
// lastName:"Doe",
// age:11,
// Hobbies:["draw","sing","dance"],
// address:{
//     city:"mumbai",
//     pincode:40000,
//     country:"India",
// },
// getBirthYear:function(){
//     return 2024 - this.age
// }
// }


// let car1={
//     brand:"Bmw",
//     getBrand:function(){
//         console.log("you drive ${this.brand}")
//     }
// }
// car1.getBrand()

// let car2={
//     brand:Mercedez
// }

// callback

// function wakeUp(callback){
//     setTimeout(()=>{
//         console,log("Wake Up")
//         callback()
//     },1000)
// }
// function brushTeeth(callback){
//     setTimeout(()=>{
//         console,log("Brush Your Teeth")
//         callback()
//     },1000)
// }
// function walkDog(callback){
//     setTimeout(()=>{
//         console,log("walkDog")
//         callback()
//     },1000)
// }
// function eatBreakfast(callback){
//     setTimeout(()=>{
//         console,log("EatBreakfast")
//         callback()
//     },1000)
// }
// function goToCollege(callback){
//     setTimeout(()=>{
//         console,log("Go To College")
//         callback()
//     },1000)
// }

// function startday(){
//     wakeUp(()=>{
//         brushTeeth(()=>{
//             walkDog(()=>{
//                 eatBreakfast(()=>{
//                     goToCollege(()=>{
//                         console.log("Done for the Day")
//                     })
//                 })
//             })
//         })
//     })
// }startday()


let num=[1,2,3,4,5,6,7,8,9]
let doubleNum = num.map((a)=>{
    return a*2

})
console.log(doubleNum)

// filter
let num2=[1,2,3,4,5,6,7,8,9]
let evenNum = num2.filter((a)=>{
    return a%2==0
})

// Reduce
let num3=[1,2,3,4,5,6,7,8,9]
let sum = num3.reduce((accumulator,n)=>{
    return accumulator+n
},0)


function calculateHypotenuseAndArea(a, b) {
    // Calculate the hypotenuse using the Pythagorean theorem
    const hypotenuse = Math.sqrt(a * a + b * b);

    // Calculate the area of the right-angled triangle
    const area = 0.5 * a * b;

    // Log the results
    console.log(`Hypotenuse: ${hypotenuse}`);
    console.log(`Area: ${area}`);
}

// Example usage
const sideA = 3;
const sideB = 4;
calculateHypotenuseAndArea(sideA, sideB);
