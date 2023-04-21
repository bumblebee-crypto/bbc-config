<script>
import { toClipboard } from '@soerenmartius/vue3-clipboard'
import intervals from '@/binance/intervals'
import symbols from '@/binance/symbols'

export default {
  data() {
    return {
      intervals,
      symbols,
      config: {
        symbols: new Set(),
        trade_interval: intervals[0],
        trend_interval: intervals[5],
        lot_size_usdt: 100.0,
        profit_margin: 0.01,
        number_open_orders: 10
      }
    }
  },
  methods: {
    toggleSymbol(symbol) {
      if (this.config.symbols.has(symbol)) this.config.symbols.delete(symbol)
      else this.config.symbols.add(symbol)
    },
    async configJSON() {
      const config = {}
      Object.assign(config, this.config)
      config.symbols = Array.from(config.symbols)
      await toClipboard(`/config \`\`\`${JSON.stringify(config)}\`\`\``)
      alert('Config message copied')
    }
  }
}
</script>

<template>
  <form>
    <h2>Trading Variables</h2>

    <label for="trade-interval">Trade interval:</label>
    <select name="trade-interval" v-model="config.trade_interval">
      <option v-for="i in intervals" :key="i" :value="i">{{ i }}</option>
    </select>

    <label for="trend-interval">Trend interval:</label>
    <select name="trend-interval" v-model="config.trend_interval">
      <option v-for="i in intervals" :key="i" :value="i">{{ i }}</option>
    </select>

    <label for="lot-size">Lot size (USDT):</label>
    <input type="number" name="lot-size" v-model="config.lot_size_usdt" />

    <label for="profit-margin">Profit margin:</label>
    <input type="number" name="profit-margin" v-model="config.profit_margin" />

    <label for="open-orders">Number of open orders:</label>
    <input type="number" name="open-orders" v-model="config.number_open_orders" />
  </form>

  <form>
    <h2>Symbols</h2>
    <div v-for="symbol in symbols" :key="symbol">
      <input :name="symbol" :value="symbol" @change="(e) => toggleSymbol(symbol)" type="checkbox" />
      <label :for="symbol">{{ symbol }}</label>
    </div>
  </form>

  <button @click="(e) => configJSON()">GET CONFIG MESSAGE</button>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
}

h2,
label {
  margin: 16px 0 4px 0;
}

select,
input {
  padding: 8px;
  border-radius: 8px;
  font-size: 18px;
  border: 3px solid transparent;
}

select:focus,
input:focus {
  border: 3px solid var(--accent-color);
  transition: all 0.3s;
}

input[type='checkbox'] {
  margin: 16px 8px 0 0;
  width: 20px;
  height: 20px;
}

button {
  display: block;
  width: 80%;
  margin: 16px auto;
  padding: 8px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: var(--accent-color);
  border: 3px solid transparent;
  cursor: pointer;
}
</style>
