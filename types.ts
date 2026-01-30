export interface Candle {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  superTrend?: number;
  trend?: 'bullish' | 'bearish';
}

export interface Trade {
  id: string;
  type: 'LONG' | 'SHORT';
  status: 'OPEN' | 'CLOSED_TP' | 'CLOSED_SL';
  entryPrice: number;
  quantity: number;
  slPrice: number;
  tpPrice: number;
  exitPrice?: number;
  timestamp: number;
  isRecovery: boolean;
  pnl?: number;
}

export interface UserProfile {
  username: string;
  apiKey: string;
  secretKey: string;
}

export enum BotStatus {
  IDLE = 'IDLE',
  RUNNING = 'RUNNING',
  PAUSED = 'PAUSED'
}

export enum StrategyState {
  LOOKING_FOR_SIGNAL = 'LOOKING_FOR_SIGNAL',
  IN_PRIMARY_TRADE = 'IN_PRIMARY_TRADE',
  IN_RECOVERY_TRADE = 'IN_RECOVERY_TRADE'
}