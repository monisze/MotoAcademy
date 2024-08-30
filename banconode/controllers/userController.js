const userService = require('../services/userServices');
async function getUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    }catch(error) {

    }
}


async function createUser(req, res) {
    const {id, nome, idade, email, senha} = req.body
    try {
        await userService.createUser(id, nome, idade, email, senha)
        res.status(201).send({message: "Usuario criado!"}) 
    } catch (error) {
        console.log(error);
    }
}

async function updateUser(req, res) {
    const { id } = req.params;
    const { nome } = req.body;
    try { 
        await userService.update(id, nome)
        res.status(200).send({message: "Usuario atualizado!"}) 

    } catch (erro) {
        console.log (error)
        res.status (400).json({message: "Erro ao atualizar usuário"})
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        await userService.deleteUser(id);
        res.status(200).json({message: "Usuario removido com sucesso"})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({message: "Erro ao atualizar o usuário"})
    }

    }


module.exports = {
    getUsers, 
    createUser,
    deleteUser,
    updateUser
}