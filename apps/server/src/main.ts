import Fastify from 'fastify';
import invariant from 'tiny-invariant';
import getExpectedDates from './app/expected_dates';

const fastify = Fastify({ logger: true });

fastify.get('/expected_date/:course_name', (req, rep) => {
  invariant(req.params);
  const { course_name } = req.params as Record<string, string>;

  rep.send(getExpectedDates(course_name));
});

fastify.listen(3000, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
