let nom = "José";
let age = 45;
let passions = ["Boxe", "Jonquilles"]

let tabUser = [nom, age, passions]

console.log(tabUser)

console.log(tabUser[2])

console.log(tabUser[2][1])

tabUser.push("test","other",42)

console.log('Après ajout :', tabUser)

console.log('Element supprimé :', tabUser.pop())

console.log('Après suppression :', tabUser)

tabUser.reverse()

console.log('Après reverse :', tabUser)