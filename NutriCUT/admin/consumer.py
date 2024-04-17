import pika, json

params = pika.URLParameters('amqps://iwnpvyez:J_gXGDiDE52kSp7nlGEtXkRQGqpBP6ha@albatross.rmq.cloudamqp.com/iwnpvyez')

connection = pika.BlockingConnection(params)
channel = connection.channel()
channel.queue_declare(queue='admin')

def calback(ch, method, properties, body):
    print('Recive in admin')
    data = json.loads(body)
    print(data)


channel.basic_consume(queue='admin', on_message_callback=calback,auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()