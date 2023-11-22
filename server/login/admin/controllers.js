
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const authdatabase = require('../admin/models')


//password hashing
const register = async (req, res) => {

    const { username, password,role } = req.body
    bcryptjs.hash(password, 10)
        .then(hash => {
            authdatabase.create({ username, password: hash,role:role})
                .then(user => res.json('ok'))
        })
        .catch(err => {
            res.json(err)
        })
}



//login and compare hash password 
//jwt 
const login = async (req, res) => {
    const { username, password } = req.body
    authdatabase.findOne({ username: username })
        .then(user => {
            // const token = jwt.sign(user,'private')
            if (user) {
                bcryptjs.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ username: user.username, role: user.role }, 'secret', { expiresIn: '1d' })
                        res.cookie('token', token)
                        return res.json({status:'ok',role:user.role})
                    } else {
                        res.json('password incorrect')
                    }
                })
            } else {
                res.json('no record exist')
            }

        }
        ).catch(e => res.json(e))
}




module.exports = { register, login }
