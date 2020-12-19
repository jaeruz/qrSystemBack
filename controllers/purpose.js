import PurposeDetails from '../models/purposeDetails.js'

export const getPurposes = async (req, res) => {
    try {
        const purposeDetails = await PurposeDetails.find()
        
        res.status(200).json(purposeDetails);
    } catch (error) {
        
        res.status(404).json({message: error.message});
    }
}

export const addPurpose = async (req, res) => {
    // const user = req.body;
    // try {

    //     UserDetails.findOne({ firstName: user.firstName, middleName: user.middleName, lastName: user.lastName }, async (err, exists) => {
    //         if (err) console.log(err);
    //         if (exists) {
    //             console.log("This has already been saved");
    //             res.status(208).json({message: err});
    //         } else {
    //             console.log('new user!!!!!')
    //             const newUser = new UserDetails(user);
    //             await newUser.save();
    //             res.status(201).json(newUser)
    //         }
    //     });

    // } catch (error) {
    //     console.log(error.message)
    //     res.status(208).json({message: error.message});
    // }
    const purpose = req.body;
    const newPurpose = new PurposeDetails(purpose);

    try {
        await newPurpose.save();
        res.status(201).json(newPurpose)
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}