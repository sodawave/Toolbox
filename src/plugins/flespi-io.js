import VueConnection from 'flespi-io-js/dist/vue-plugin'
import { version } from '../../package.json'

let connectionConfig = {socketConfig: { clientId: `toolbox-${version}-${Math.random().toString(16).substr(2, 8)}`, mqttSettings: { protocolVersion: 5, wsOptions: { objectMode: false, perMessageDeflate: true } } }}

/* if local dev build */
if (DEV && !SERVER) {
  connectionConfig = {
    httpConfig: { server: 'https://localhost', port: 9005 },
    socketConfig: { server: `wss://localhost:9017`, clientId: `toolbox-${version}-dev-${Math.random().toString(16).substr(2, 8)}`, mqttSettings: { protocolVersion: 5, wsOptions: { objectMode: false, perMessageDeflate: true } } }
  }
}

// check for pfront SERVER
if (PROD && SERVER) {
  if (window.location.host.indexOf('localhost:9004') !== -1 || window.location.host.indexOf('localhost:9005') !== -1 || window.location.host.indexOf('localhost:7004') !== -1) {
    connectionConfig = {
      httpConfig: { server: 'https://localhost', port: 9005 },
      socketConfig: { server: `wss://localhost:9017`, clientId: `toolbox-${version}-dev-${Math.random().toString(16).substr(2, 8)}`, mqttSettings: { protocolVersion: 5, wsOptions: { objectMode: false, perMessageDeflate: true } } }
    }
  }
}

export default ({Vue, store}) => {
  Vue.prototype.$flespiServer = connectionConfig.httpConfig && connectionConfig.httpConfig.server ? `${connectionConfig.httpConfig.server}:${connectionConfig.httpConfig.port}` : 'https://flespi.io'
  Vue.use(VueConnection, connectionConfig)
  Vue.connector.socket.on('error', (error) => {
    store.commit('reqFailed', error)
  })
  if (window) {
    window.addEventListener('beforeunload', () => {
      Vue.connector.socket.close(true)
    })
  }
}
