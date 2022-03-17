import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', (_, rep) => {
  rep.send('Hello World!');
});

fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
