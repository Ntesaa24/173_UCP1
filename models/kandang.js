const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Kandang = Sequelize.define('Kandang', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        judul: {
            type: DataTypes.STRING, 
            allowNull: false 
        },
        penulis: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deskripsi: {
        type: DataTypes.TEXT, 
        allowNull: false
        }
     }, {
        tableName: 'kandang',
        timestamps: true,
        freezeTableName: true

        
    });
    return Kandang
}