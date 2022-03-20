let input 
while(input = readline()) {
    input = input.trim().split(/\s+/).map(a => Number(a))
    let len = Math.sqrt((input[1] - input[3])**2 + (input[2] - input[4])**2)
    console.log(Math.ceil(len/input[0]/2))
}