import pika, json

params = pika.URLParameters('amqps://iwnpvyez:J_gXGDiDE52kSp7nlGEtXkRQGqpBP6ha@albatross.rmq.cloudamqp.com/iwnpvyez')

connection = pika.BlockingConnection(params)
channel = connection.channel()

def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='main', body=json.dumps(body), properties=properties)