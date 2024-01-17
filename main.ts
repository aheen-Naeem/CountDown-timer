import { differenceInSeconds } from "date-fns";
import { is } from "date-fns/locale";
import inquirer from "inquirer";

const response = await inquirer.prompt({
    type:"number",
    name:"userInput",
    message:"Please enter the amount of second!",
    validate:(input)=>{
        if(isNaN(input)){
            return "please enter valid number"
        } else if (input>60){
             return"seconds must be in 60"
        } else{
            return true;
        }
    },
})

let input =response.userInput

function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val)
    const intervalTime = new Date(intTime)
    setInterval(()=>{
        const currentTime = new Date()
        let timeDifference  = differenceInSeconds(intervalTime,currentTime)
        if(timeDifference<=0){
            console.log("Timer has  expired")
            process.exit()
        }
        const min = Math.floor((timeDifference%(3600 *24))/3600)
        const sec = Math.floor(timeDifference%60)
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0") }`)
    },1000)
}
startTime(input)


// const response = await inquirer.prompt({
//     type: "input",
//     name: "userInput",
//     message: "Please enter the amount of seconds!"
// });

// const input = parseInt(response.userInput);

// function startTime(val: number) {
//     const intervalTime = new Date();
//     intervalTime.setSeconds(intervalTime.getSeconds() + val);

//     const interval = setInterval(() => {
//         const currentTime = new Date();
//         const timeDifference = differenceInSeconds(intervalTime, currentTime);

//         if (timeDifference <= 0) {
//             clearInterval(interval);
//             console.log("Timer has expired");
//         }

//         const min = Math.floor((timeDifference % (3600 * 24)) / 60);
//         const sec = Math.floor(timeDifference % 60);
//         console.log(`${min} : ${sec}`);
//     }, 1000);
// }
