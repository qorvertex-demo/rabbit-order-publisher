import amqp from "amqplib";
export async function publishOrder(order: any) {
  const conn = await amqp.connect("amqp://rabbit");
  const channel = await conn.createChannel();
  channel.sendToQueue("order-events", Buffer.from(JSON.stringify(order)));
}
