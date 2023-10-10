const greetMessage = name => {
    console.log(`Good Morning, ${name}`);
};

const greetUsers = (names, callback) => {
    names.forEach(name => {
        callback(name);
    });
};



greetMessage("John") // print "Good Morning, John"

greetUsers(["John","Peter","Mark"], greetMessage)
// "Good Morning, John"
// "Good Morning, Peter"
// "Good Morning, Mark"