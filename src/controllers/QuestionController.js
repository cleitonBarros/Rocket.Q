const Database = require('../db/config')

module.exports={
    async index(req,res){
        const db = await Database()
        const roomId =req.params.room
        const questionId = req.params.question
        const action =req.params.action
        const password = req.body.password

       //verificar a senha 
       const isVrai= await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
       if(isVrai.pass == password ){
           if(action == "delete" ){

            await db.run(`DELETE FROM question WHERE id = ${questionId}`)
           }else if(action == "checked"){

            await db.run(`UPDATE question SET read = 1 WHERE id = ${roomId}`)

           } res.redirect(`/room/${roomId}`)


       }else{
           res.render('passIncorrect',{roomId: roomId})
       }

       
    },

    async create(req, res){
        const db = await Database()

        const question = req.body.question
        const roomId = req.params.room

        await db.run(`INSERT INTO question(
            title,
            room,
            read
        )VALUES(
            "${question}",
            ${roomId},
            0
        )`)

        res.redirect(`/room/${roomId}`)
    }
}