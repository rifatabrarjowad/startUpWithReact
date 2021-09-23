const person = {
    fname: "Rifat",
    lname: "Abrar",
    class: "ten",
    language: "php",
    fun: function (name) {
        console.log("Hey " + name + ", It's Working....!");
    },
    display: function () {
        return this.fname
    }
}
console.log(person.lname);
console.log(person.fun("Rifat"));
console.log(person.display());