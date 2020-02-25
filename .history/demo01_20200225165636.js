function takeLogeTime(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve('long_time_value'),1000)
    })
}