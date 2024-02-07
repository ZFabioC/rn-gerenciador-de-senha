import * as SQlite from 'expo-sqlite'

const db = SQlite.openDatabase('database.db')

export default db