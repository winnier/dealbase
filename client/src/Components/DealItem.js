const DealItem = ({ name, product, value, stage }) => {

    const numDisplayer = (number) => {
        if (Math.floor(number) != number) {
            let x = number.toString()
            let numArr = x.split('')
            console.log(numArr)
            let len = numArr.length
            let a = numArr.indexOf('.')
            for (let pos = a - 1; pos > 0; pos--) {
                if ((a - pos) % 3 == 0 && len - pos != 0) {
                    numArr.splice(pos, 0, ',')
                }
            }
            let numWithCommas = ""
            for (let i = 0; i < numArr.length; i++) {
                numWithCommas += numArr[i]
            }
            return numWithCommas
        } else if (Math.floor(number) == number) {
            let x = number.toString()
            console.log(x)
            let numArr = x.split('')
            console.log(numArr)
            let len = numArr.length
            for (let pos = numArr.length; pos > 0; pos--) {
                if ((len - pos) % 3 == 0 && len - pos != 0) {
                    numArr.splice(pos, 0, ',')
                }
            }
            let numWithCommas = ""
            for (let i = 0; i < numArr.length; i++) {
                numWithCommas += numArr[i]
            }
            numWithCommas = numWithCommas + '.00'
            return numWithCommas
        }
    }

    return (
            <tr>
                <td>{name}</td>
                <td>{product}</td>
                <td>{`$${numDisplayer(value)}`}</td>
                <td>{stage}</td>
            </tr>
    )
}


export default DealItem