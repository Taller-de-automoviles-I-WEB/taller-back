//Para este ejemplo, vamos a usar una tabla llamada testTable, que tiene un id (clave primaria), un name, y un message

/*
Cabe aclarar, la exportamos para que el archivo index dentro de la carpeta model pueda capturar el archivo
No hace falta importarlo desde index, ejemplo de uso en el controlador y enrutador respectivo
*/

module.exports = (sequelize, dataTypes) => {
    let alias = "TestTable"; 
    //Esto es un alias, solo impacta en nuestro uso
    //En este ejemplo: db.TestTable.findAll()
    //Idealmente el nombre del archivo y el alias deberian ser los mismos para facil uso

    let cols = {
        id: { //id, es un INT(10) UNSIGNED, no permite nulos, tiene auto incremento y clave primaria
            type: dataTypes.INTEGER(10).UNSIGNED, //Tipo de dato
            allowNull: false, //No permite nulos
            autoIncrement: true, //Auto incremento
            primaryKey: true, //Clave primaria
        },
        name: { //En este caso, name es un VARCHAR(100) y no permite nulos, asi que lo aclaramos
            type: dataTypes.STRING(100),
            allowNull: false
        },
        message: { // Y en este caso, message tambien es VARCHAR(100), pero SI permite nulos, asi que no hace falta aclarar
            type: dataTypes.INTEGER(5).UNSIGNED,
        }
    }
    let config = {
        timestamps: false, //Si nuestra tabla usa timestamps, deberemos aclararlas adelante
        //Estas sirven para el manejo de creacion y edicion, tambien opcionalmente la eliminacion
        /*
        createdAt: "created_at",
        updatedAt: "updated_at",
        */
        tableName: "testTable" //El nombre tal cual de la tabla en el servidor
    }
    const TestTable = sequelize.define(alias, cols, config); //Esto crea la tabla, la cual retorna esta funcion
    return TestTable
}