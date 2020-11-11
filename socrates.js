const names = ['Luzuko', 'Socrates', 'Steve']
const isMan = true;
const isMortal = true;

const statement = ['All men are mortal', 'Socrates is a man.', 'Therefore, socrates is mortal.', 'not mortal']

if (isMan === isMortal) {
    console.log(statement[0])
    console.log(statement[1])
    console.log(statement[2])
} else if (isMan !== isMortal) {
    console.log(statement[3])
}

isVanilla = true
isChocolate = true

if (isVanilla || isChocolate) {
    console.log('This cake is either vanilla or chocolate')
    if (isChocolate !== true) {
        console.log('This cake is not chocolate');
        console.log('Therefore,this cake is vanilla');
    }
}
