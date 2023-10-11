/*
*
 * This function greets a user by name.
 *
 * @param {string} name - Name of the user.
 * @returns {string} - Greeting message for the user.
 *
 * Usage:
 * const greetJack = greetUser("Jack"); // greetJack will be "Hello, Jack"
 */
function greetUser(userName) {
    return ("Hello, " + userName)
}
greetUser("Jonathan")

/*
*
 * This function converts a string to spinal case.
 *
 * @param {string} str - The string to be converted.
 * @returns {string} - The spinal cased string.
 *
 * Usage:
 * const spinal = toSpinalCase("This Is Spinal Tap"); // spinal will be "this-is-spinal-tap"
 */
function toSpinalCase(string) {
    let newString = string.replace(/\s+/g, "-")
    return newString.toLowerCase()

}

console.log(toSpinalCase("This Is Spinal Tap"));
console.log(toSpinalCase(""));
/*
*
 * This function calculates the time taken by light to travel a certain distance.
 *
 * @param {number} distance - The distance in kilometers.
 * @returns {number} - Time taken in seconds.
 *
 * Usage:
 * const time = lightTravelTime(300000); // time will be 1
 */
function lightTravelTime(distance) {
    return distance / 300000
}
const time = lightTravelTime(600000);
