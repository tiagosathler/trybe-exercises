// ./src/index.ts
import { Connector, ReadOnlyConnector, ReadOnlyRedisConnector, RedisConnector, MySQLConnector } from "./Connectors";

const token = 'ce42033d-9133-457a-a1a1-41ac0b63a333';


const connReadOnlyRedis = new ReadOnlyRedisConnector({
  host: 'redisdb',
  port: 6379});

const connRedis = new RedisConnector({
  host: 'redisdb',
  port: 6379});
  
const connMySQL = new MySQLConnector({
  host: 'mysqldb',
  port: 3306,
  database: 'counter',
  user: 'root',
  password: 'example'});


const normalMain = (connector: Connector) => {
  connector.firstCount(token);

  const logCount = async () => {
    try {
      const count = await connector.getCount(token);
      console.log(count);
    } catch (err) {
      console.error(err);
    }
  };

  const doSomeIncrements = () => {
    logCount();
    connector.incrementCount(token);
    connector.incrementCount(token);
    connector.incrementCount(token);
  };

  const incrementsInterval = setInterval(doSomeIncrements, 500);

  setTimeout(() => {
    clearInterval(incrementsInterval);
    logCount();
    connector.clearCount(token);
    connector.closeConnection();
  }, 5500);
};

//execute normalMain
// normalMain(connRedis);

const readOnlyMain = async (connector: ReadOnlyConnector) => {
    try {
      const count = await connector.getCount(token);
      console.log(count);
    } catch (err) {
      console.error(err);
    }
};

// execute readOnlyMain
readOnlyMain(connReadOnlyRedis);
