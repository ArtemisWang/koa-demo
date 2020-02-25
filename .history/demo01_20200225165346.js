async function testAsync(){
    return 'hello async'
}

function getSomething(){
    return 'something'
}

async function test(){
    const v1=await getSomething()
    const v2=await testAsync()
    console.log(v1, v2)
}

test()