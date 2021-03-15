module.exports = function toReadable (number) {
    
let tenths = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 
'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
'seventeen', 'eighteen', 'nineteen']
let hundredths = ['.', '.', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
let thousandths = ['hundred']
 // let tenThousandths = ['thousand']

if (typeof (number) === 'number') {
    if (number < 20) {
    return tenths[number]
    } 
    else if (number / 100 == 1) {
        return tenths[Math.floor(number / 100)] + ' ' + thousandths
        }
        else if((number > 19 && number < 101) && (number % 10 == 0)){
            return hundredths[parseInt(number.toString()[0])];
        }
        else if(number >20 && number < 100){
            return hundredths[(Math.floor(number / 10))] + ' ' +  tenths[parseInt(number.toString()[1])];
        }
        else if ((number > 100 && number < 120) || (number > 900 && number < 920) || (number > 800 && number < 820) || (number > 700 && number < 720) || (number > 600 && number < 620) || (number > 500 && number < 520) || (number > 400 && number < 420) || (number > 300 && number < 320) || (number > 200 && number < 220)) {
            return tenths[Math.floor(number / 100)] + ' ' + thousandths + ' ' + tenths[parseInt(number.toString()[1] + number.toString()[2])];
        }
        else if ((number > 99 && number < 1000) && number % 10 == 0 && number % 100 !== 0 ) {
            return tenths[Math.floor(number / 100)] + ' ' + thousandths + ' ' + hundredths[parseInt(Math.floor(number / 10).toString()[1])];
        }
        else if ((number > 120 && number < 1000) && number % 100 == 0) {
            return tenths[Math.floor(number / 100)] + ' ' +thousandths;
        }
        else if (number > 120 && number < 1000) {
            return tenths[Math.floor(number / 100)] + ' ' + thousandths + ' ' + hundredths[parseInt(Math.floor(number / 10).toString()[1])] + ' ' + tenths[parseInt(number.toString()[2])];
        }
    }
}
