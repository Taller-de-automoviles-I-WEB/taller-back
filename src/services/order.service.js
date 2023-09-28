const db = require("../database/models");
const handleHttp = require("../utils/handle.logs");

// Crear una nueva orden
const createOrder = async (data) => {
    try {
        const newOrder = await db.Order.create(data);
        return newOrder;
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error;
    }
}

// Obtener una orden por su ID
const getOrderById = async (orderId) => {
    try {
        const order = await db.Order.findByPk(orderId);
        if (!order) {
            throw new Error("La orden especificada no existe.");
        }
        return order;
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error;
    }
}

// Obtener todas las ordenes

const getAllOrder = async () => {
    try {
        const orders = await db.Order.findAll();
        return orders;
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error;
    }
}


// Actualizar una orden existente
const updateOrder = async (orderId, data) => {
    try {
        const order = await db.Order.findByPk(orderId);
        if (!order) {
            throw new Error("La orden especificada no existe.");
        }

        // Actualiza los campos de la orden con los datos proporcionados
        await order.update(data);

        return order;
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error;
    }
}

// Eliminar una orden por su ID
const deleteOrder = async (orderId) => {
    try {
        const order = await db.Order.findByPk(orderId);
        if (!order) {
            throw new Error("La orden especificada no existe.");
        }

        // Elimina la orden
        await order.destroy();

        return "Orden eliminada exitosamente.";
    } catch (error) {
        handleHttp.errorHandler(error);
        throw error;
    }
}

module.exports = { createOrder, getOrderById, updateOrder, deleteOrder, getAllOrder };