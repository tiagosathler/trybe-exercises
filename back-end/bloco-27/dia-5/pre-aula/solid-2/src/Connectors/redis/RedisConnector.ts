// ./src/Connectors/redis/RedisConnector.ts

import redis, { RedisClient } from 'redis';
import ReadOnlyRedisConnector from './ReadOnlyRedisConnector';
import Connector, { ConnectorConstructor } from '../Connector';

export default class RedisConnector extends ReadOnlyRedisConnector implements Connector {

  protected client: RedisClient;

  constructor(config: ConnectorConstructor) {
    super(config);
    this.client = redis.createClient(config);
  }

  public incrementCount(token: string): void {
    this.client.incr(token);
  }

  public clearCount(token: string): void {
    this.client.set(token, '0');
  }

  public firstCount = this.clearCount;
}