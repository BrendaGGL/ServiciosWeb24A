import pika, json
from main import db, Recipe

params = pika.URLParameters('amqps://iwnpvyez:J_gXGDiDE52kSp7nlGEtXkRQGqpBP6ha@albatross.rmq.cloudamqp.com/iwnpvyez')

connection = pika.BlockingConnection(params)
channel = connection.channel()
channel.queue_declare(queue='main')

def calback(ch, method, properties, body):
    print('Recive in main')
    data = json.loads(body)
    print(data)

    if properties.content_type == 'Recipe_Created':
        recipe = Recipe(id=data['id'], title = data['title'], image = data['image'], description = data['description'])
        db.session.add(recipe)
        db.session.commit()

    elif properties.content_type == 'Recipe_Updated':
        recipe = Recipe.query.get(data['id'])
        recipe.title = data['title']
        recipe.image = data['image']
        recipe.description = data['description']
        db.session.commit()
    
    elif properties.content_type == 'Recipe_Deleted':
        recipe = Recipe.query.get(data)
        db.session.delete(recipe)
        db.session.commit()


channel.basic_consume(queue='main', on_message_callback=calback, auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()
