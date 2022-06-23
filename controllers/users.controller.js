const { User } = require('../models/user.model')

const getAllUsers = async (req, res) => {

    try {
        const users = await User.findAll()
        res.status(201).json({
            status: 'success',
            users
        })
    } catch (err) {
        console.log(err)
    }
}

const createUsers = async (req, res) => {
    try {
        const newUser = await User.create({
            entranceTime : new Date(),
            status: "working",
            
        });

        res.status(201).json({
            status: 'success',
            newUser

        })
    } catch (err) {
        console.log(err)
    }
}

const getUserById = async (req, res) => {

    
    const { id } = req.params;

    const user = await User.findOne({ where: { id } })

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found '
        })

    }

    res.status(200).json({
        status: 'success',
        user

    })
}
const updateUser = async (req, res) => {

    const { id } = req.params;
    

    const user = await User.findOne({ where: { id } })

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found '
        })

    }

    await user.update({ exitTime: new Date(), status: "out" });

    res.status(204).json({
        status: 'success'
    })


}
const deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({ where: { id } })

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found '
        })

    }

    await user.update({ status: 'canceled' });
}


module.exports = { getAllUsers, createUsers, getUserById, updateUser, deleteUser };

