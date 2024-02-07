import db from "../db";

db.transaction( tx => {
    tx.executeSql("CREATE TABLE IF NOT EXISTS userdata (id INTEGER PRIMARY KEY AUTOINCREMENT, platform TEXT, user TEXT, password TEXT);")
})

const insertUser = (obj) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO userdata (platform, user, password) values (?, ?, ?);", [obj.platform, obj.user, obj.password],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) {
                        resolve(insertId)
                    } else {
                        reject("Erro na inserção: " + JSON.stringify(obj))
                    }
                },
                (_, error) => reject(error) //erro interno em tx execute

            )
        })
    })
}

export default {
    insertUser
}