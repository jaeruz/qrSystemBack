import UserDetails, { postSchema } from "../models/userDetails.js"

export const getUsers = async (req, res) => {
  try {
    const userDetails = await UserDetails.find()
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.status(200).json(userDetails)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateAyuda = async (req, res) => {
  try {
    const userDetails = await UserDetails.updateOne(
      { _id: req.body.id },
      {
        $set: {
          ayuda: req.body.ayuda,
        },
      }
    )
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.status(200).json(userDetails)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const registerUsers = async (req, res) => {
  const user = req.body
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  try {
    UserDetails.findOne(
      {
        firstName: user.firstName,
        middleName: user.middleName,
        lastName: user.lastName,
      },
      async (err, exists) => {
        if (err) console.log(err)
        if (exists) {
          console.log("This has already been saved")
          res.status(208).json({ message: err })
        } else {
          console.log("new user!!!!!")
          const newUser = new UserDetails(user)
          await newUser.save()
          res.status(201).json(newUser)
        }
      }
    )
  } catch (error) {
    console.log(error.message)
    res.status(208).json({ message: error.message })
  }
  // const newUser = new UserDetails(user);

  // try {
  //     await newUser.save();
  //     res.status(201).json(newUser)
  // } catch (error) {
  //     res.status(409).json({message: error.message});
  // }
}
