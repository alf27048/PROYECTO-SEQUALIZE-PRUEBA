module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('producto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: DataTypes.STRING(200),
        descripcion: DataTypes.STRING(500),
        precio: DataTypes.INTEGER,
        imagen: DataTypes.STRING(150),
        disponible: DataTypes.INTEGER
    },
    {
        freezeTableName: true,
        timestamps: false
    });
        Producto.associate = (models) => {
        Producto.belongsTo(models.extra);
    };

    return Producto
}