
const student = require('../models/student')
const helpers = require('../Helpers/helper')
const result = require('../models/result')
const { registerValidation,eventValidation} = require('../Validation/Validation')

module.exports = {
    register: async (req, res, next) => {
        
        try {
            registerValidation(req.body,next)
            eventValidation(req.body.events,next)
            let arr = req.body.events
            const chessno = await helpers.uniqueCodeGenerator()
            let eventArr = []
            for (let i = 0; i < arr.length; i++) {
                eventArr.push(arr[i].events)
            } 
            const count = await student.countDocuments({})
            if (count < 1) {
                await result.create({
                    highJump: [],
                    longJump: [], 
                    hurdles: [],
                    javallin: [],
                    hundredMeter: [],
                    twoHundredMeter: [],
                    fourHundredMeter: [],
                    eighHundredMeter: [],
                    shortPut: [],
                    discusThrow: [],
                    relayHundred: [],
                    relayFourHundred: []
                })
            }
            await student.create({
                name: req.body.name,
                phone: req.body.phone,
                age: req.body.age,
                chessno: chessno,
                events: eventArr
            })

            res.json({ status: true })
        } catch (err) {
            next(err)
        }
    },
    getPraticipants: async (req, res, next) => {
        try {
            const highJump = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "High-jump" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const longJump = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "Long-jump" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const hurdles = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "Hurldles" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const javalinThrow = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "Javalinthrow" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const hundredMeter = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "Hundred-Meter" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const twoHUndredMeter = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "TwoHundred-meter" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const fourHundredMeter = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "FourHundred-meter" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const eightHundredMeter = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "Eighthundred-meter" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const shortPut = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "Short-put" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const discusThrow = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "Discus-throw" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            const relayHundred = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "Relay 4*100" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }
            ])
            const relayFourHundred = await student.aggregate([
                {
                    $match: {
                        events: { $elemMatch: { $eq: "Relay 4*400" } }
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }

            ])
            res.json({
                status: true,
                highJump: highJump,
                longJump: longJump,
                hurdles: hurdles,
                javalinThrow: javalinThrow,
                hundredMeter: hundredMeter,
                twoHUndredMeter: twoHUndredMeter,
                fourHundredMeter: fourHundredMeter,
                eightHundredMeter: eightHundredMeter,
                shortPut: shortPut,
                discusThrow: discusThrow,
                relayHundred: relayHundred,
                relayFourHundred: relayFourHundred
            })
        } catch (err) {
            next(err)
        }
    },
    addResult: async (req, res, next) => {
        try {
            console.log(req.body)
            const first = await student.aggregate([
                {
                    $match: {
                        chessno: req.body.first
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }
            ])
            const second = await student.aggregate([
                {
                    $match: {
                        chessno: req.body.second
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }
            ])
            const third = await student.aggregate([
                {
                    $match: {
                        chessno: req.body.third
                    }
                },
                {
                    $project: {
                        name: 1,
                        chessno: 1,
                        _id: 0
                    }
                }
            ])
            if (req.body.event === "highJump") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            highJump: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }

                );
            } else if (req.body.event === "longJump") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            longJump: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            } else if (req.body.event === "hurdles") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            hurdles: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            } else if (req.body.event === "javallin") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            javallin: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            } else if (req.body.event === "hundredMeter") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            hundredMeter: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            } else if (req.body.event === "twoHundredMeter") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            twoHundredMeter: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ]
                            }
                        }
                    }
                );
            } else if (req.body.event === "fourHundredMeter") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            fourHundredMeter: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            } else if (req.body.event === "eighHundredMeter") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            eighHundredMeter: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            } else if (req.body.event === "shortPut") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            shortPut: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            } else if (req.body.event === "discusThrow") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            discusThrow: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            } else if (req.body.event === "relayHundred") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            relayHundred: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            } else if (req.body.event === "relayFourHundred") {
                await result.updateOne(
                    {},
                    {
                        $push: {
                            relayFourHundred: {
                                $each: [
                                    { name: first[0].name, chessno: first[0].chessno },
                                    { name: second[0].name, chessno: second[0].chessno },
                                    { name: third[0].name, chessno: third[0].chessno }
                                ],
                                $slice: -3
                            }
                        }
                    }
                );
            }

            res.json({ status: true })
        } catch (err) {
            next(err)
        }

    },
    getResult: async (req, res, next) => {
        try {
            const resultData = await result.find()
            res.json({
                status: true,
                resultData: resultData[0]
            })
        } catch (err) {
            next(err)
        }
    }
} 