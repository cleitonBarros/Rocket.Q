const Database = require('../db/config')


module.exports = {
    async create(req, res){

       const db = await Database()
        const pass = req.body.password
        let roomId 
        let isRoom = true;
        while (isRoom){
                 /* Gera o numero da sala */
            for(let i = 0; i <6; i++){
                if(i==0){
                    roomId = Math.floor(Math.random()*10).toString()
                }else{
                    roomId += Math.floor(Math.random()*10).toString()
                }
            }
            //verifica se o numero da sla ja existe 
              const roomIdExist =  await db.all(`SELECT id FROM rooms`)
              isRoom = roomIdExist.some(roomIdExist => roomIdExist === roomId)
              if(!isRoom) {
                  await db.run(`INSERT INTO rooms(
                      id,
                      pass
                  ) VALUES (
                      ${parseInt(roomId)},
                      ${pass}
                  ) `)
              }
   


        }
            

       
        await db.close()

        res.redirect(`/room/${roomId}`)
    }
}