import Joi from 'joi';

/**
 * Schema for session objects.
 */
const SessionSchema = Joi.object().keys({
  description: Joi.string().default(null),
  session_data: Joi.object().default({}),
  version: Joi.number().integer(),
  timeCreated: Joi.date(),
  timeUpdated: Joi.date(),
  kibanaSavedObjectMeta: Joi.object().keys({
    searchSourceJSON: Joi.string()
  })
});

export default SessionSchema;
