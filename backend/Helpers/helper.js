const student = require('../models/student')

const uniqueCodeGenerator = () => {
    try {
        return new Promise(async (resolve, reject) => {
            student.countDocuments({}).then((count) => {
                chessno = count + 1
                const uniqueCode = chessno
                resolve(uniqueCode);

            }).catch((err) => {
                reject(err);
            })

        })
    } catch (err) {
        console.log(err)
    }

};

function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }


module.exports = {
    uniqueCodeGenerator,
    hasDuplicates
} 