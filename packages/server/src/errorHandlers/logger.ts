import event from 'events';

export const logger = new event.EventEmitter();

type ILog = 'log' | 'error' | 'warn';

interface ITypeLoggers {
  type: string
  color: string
  log: ILog
}

const typeLoggers: ITypeLoggers[] = [
  {type: 'info', color: '\x1b[36m', log: 'log'},
  {type: 'error', color: '\x1b[33m', log: 'error'},
  {type: 'warning', color: '\x1b[31m', log: 'warn'},
  {type: 'successfully', color: '\x1b[34m', log: 'log'},
];

typeLoggers.map(e => {
  logger.on(e.type, (info) => {
    console[e.log](`[${e.color}${e.type}\x1b[0m]:`, info)
  });
});
