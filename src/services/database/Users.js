import db from "./config/db";

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

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM userdata;", 
        [],
        (_, { rows }) => resolve(rows._array),
        (_,error) => reject(error)
      )
    })
  })
}

const removeUser = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("DELETE FROM userdata WHERE id=?;", 
      [id],
      (_, { rowsAffected }) => {
        resolve(rowsAffected);
      },
      (_, error) => reject(error)
      )
    })
  })
}

export default {
    insertUser,
    getAllUsers,
    removeUser
}