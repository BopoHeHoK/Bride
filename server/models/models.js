const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unigque: true },
    phone: { type: DataTypes.STRING, unigque: true },
    password: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
})

const Notification = sequelize.define("notification", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    notification: { type: DataTypes.STRING, allowNull: false }
})

const Booking = sequelize.define("booking", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING },
    date: { type: DataTypes.DATEONLY },
    time: { type: DataTypes.TIME },
    status: { type: DataTypes.STRING, defaultValue: "Запись создана" }

})

const Message = sequelize.define("message", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    message: { type: DataTypes.TEXT }
})

const Basket = sequelize.define("basket", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketProduct = sequelize.define("basket_product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const Order = sequelize.define("order", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    comment: { type: DataTypes.STRING },
    receiptType: { type: DataTypes.BOOLEAN },
    address: { type: DataTypes.STRING },
    count: { type: DataTypes.INTEGER },
    cost: { type: DataTypes.FLOAT },
    status: { type: DataTypes.STRING, defaultValue: "Заказ создан" }
})

const OrderProduct = sequelize.define("order_products", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    basketId: { type: DataTypes.INTEGER },
    productId: { type: DataTypes.INTEGER }
})

const Feedback = sequelize.define("feedback", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING, defaultValue: "Нейтральный" },
    feedback: { type: DataTypes.TEXT }
})

const Product = sequelize.define("product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
    price: { type: DataTypes.FLOAT },
    description: { type: DataTypes.TEXT, defaultValue: "" },
    img: { type: DataTypes.STRING },
    popularity: { type: DataTypes.FLOAT, defaultValue: 0 }
})

const ProductInfo = sequelize.define("product_info", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }
})

const ProductType = sequelize.define("product_type", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
})

const SewingSchedule = sequelize.define("sewing_schedule", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.STRING },
    time: { type: DataTypes.STRING }
})

const FittingSchedule = sequelize.define("fitting_schedule", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.STRING },
    time: { type: DataTypes.STRING }
})

const Staff = sequelize.define("staff", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    post: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING }
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Feedback)
Feedback.belongsTo(User)

User.hasMany(Notification)
Notification.belongsTo(User)

User.hasMany(Booking)
Booking.belongsTo(User)

User.hasMany(Message)
Message.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Product.hasOne(BasketProduct)
BasketProduct.belongsTo(Product)

Order.hasMany(OrderProduct, { as: "products" })
OrderProduct.belongsTo(Order)

Product.hasMany(ProductInfo, { as: "info" });
ProductInfo.belongsTo(Product)

ProductType.hasMany(Product)
Product.belongsTo(ProductType)

module.exports = {
    User,
    Feedback,
    Notification,
    Booking,
    Message,
    Basket,
    BasketProduct,
    Order,
    OrderProduct,
    Product,
    ProductType,
    ProductInfo,
    SewingSchedule,
    FittingSchedule,
    Staff
}




