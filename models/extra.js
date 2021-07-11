module.exports = (sequelize, DataTypes) => {
    const Extra = sequelize.define('extra', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        logo: DataTypes.BOOLEAN,
        destapador: DataTypes.BOOLEAN,
        letra: DataTypes.STRING(50),
        lustre: DataTypes.STRING(50),
        imperm: DataTypes.BOOLEAN
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    Extra.associate = (models) => {
        Extra.hasMany(models.producto);
    };

    return Extra;

}