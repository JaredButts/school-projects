/**
 * Student InfoS
 */
function studentInfo() {
    const name = 'Jared Butts';
    const studentId = '101146171';
    const numberOfCourse = 4;
    const program = 'Computer Systems Technician';
    const hasPartTimeJob = false;
    let jobCondition;
    console.log(`My name is ${name} and I’m in ${program} program. I’m taking ${numberOfCourse} course in this semester.`);
    if (hasPartTimeJob) {
        jobCondition = 'have';
    } else {
        jobCondition = 'don’t have';
    }
    console.log(`My name is ${name} and I’m in ${program} program. I’m taking ${numberOfCourse} course in this semester and I ${jobCondition} a part-time job now.`);
}

/**
 * Student Birth and Graduation details
 */

function birthAndGraduationInfo(age, year_to_graduate) {
    const thisYear = 2020;
    const yearOfBirth = thisYear - age;
    const graduationYear = thisYear + year_to_graduate;
    console.log(`You were born the year: ${yearOfBirth}.`);
    console.log(`You will graduate from college in year: ${graduationYear}.`);
}

/**
 * Temperature converter
 */

function temperatureConverter(celsius, fahrenheith) {
    const fahrenheitEquivalent = celsius * 9 / 5 + 32;
    const celsiusEquivalent = (fahrenheith - 32) * 5 / 9;
    console.log(`${celsius}°C is ??°${fahrenheitEquivalent}.`);
    console.log(`${fahrenheith}°F is ${celsiusEquivalent}°C.`);
}

/**
 * Even and odd numbers
 */

function evenOddNumbers(number) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            //even
            evenSum += i;
        } else {
            //odd
            oddSum += i;
        }
    }
    console.log(`Odd sum = ${oddSum} and Even sum = ${evenSum}`);
}

/**
 * 5: Larger or largest number
 */

function largerOrLargest(num1, num2, num3) {
    const largerValue = Math.max(num1, num2, num3);
    console.log(`The larger value is ${largerValue}`);
}

/**
 * 6: larges and smallest
 */
function largesOrSmallest() {
    const largerValue = Math.max(...arguments);
    const smallerValue = Math.min(...arguments);
    console.log(`The larger value is ${largerValue} and the smaller value is ${smallerValue}`);
}

/**
 * 7: Multiples
 */

function multiples(first_number, second_number) {
    for (let i = 1; i <= second_number; i++) {
        console.log(`${first_number} X ${i} = ${first_number * i}`);
    }
}

/**
 * 8: What is the character case
 */

function whatCharacterCase(char) {
    /**If char is currently an uppercase character, changing it to uppercase will stil make it the same uppercase character */
    if (char.toUpperCase() === char) {
        console.log(`${char} is an uppercase letter.`);
    } else {
        console.log(`${char} s not an uppercase letter.`);
    }
}
