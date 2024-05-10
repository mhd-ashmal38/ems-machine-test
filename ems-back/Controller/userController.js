const t_logins=require('../Modals/loginSchema')

// login
exports.login = async (req, res) => {
    // console.log("inside login");
    try {
        const users = await t_logins.find({})
        return res.status(200).json(users)
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: "Internal server error" })
    }
}