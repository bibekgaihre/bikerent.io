import amqplib from "amqplib";


let channel: any, connection: any;
let exchange = "pub_sub_payment";



async function connect() {
    const server: string = (process.env.MQURL) || "";
    connection = await amqplib.connect(server);
    channel = await connection.createChannel();

    await channel.assertExchange(exchange, 'topic', { durable: true });
    await channel.assertQueue('', { durable: true })
}

export default connect;
export { channel, connection, exchange };