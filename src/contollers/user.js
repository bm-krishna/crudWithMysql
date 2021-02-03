
function createUser(req, res) {
    console.log('check the user');
    return res.json({
        message: "this is create user controller"
    });
}
function getUserById(req, res) {
    return res.json({
        message: "this is getUserById controller"
    });
}

function updateUser(req, res){
    return res.json({
        message: "this is updateUser controller"
    });
}

function deleteUser(req, res){
    return res.json({
        message: "this is deleteUser controller"
    });
}
module.exports = {
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}