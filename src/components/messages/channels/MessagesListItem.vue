<template>
  <div :style="{height: `${itemHeight}px`, width: `${rowWidth}px`}">
    <div
      v-if="!item['__connectionStatus'] && !item['x-flespi-filter-prev'] && !item['x-flespi-filter-next']"
      @click="(event) => { itemClickHandler(index, clearItem, event) }"
      class="cursor-pointer"
      :class="[item.__status ? 'missed-items' : '']"
      :style="{height: `${itemHeight}px`, width: `${rowWidth}px`, backgroundColor: selected ? 'rgba(255,255,255,0.7)': '', color: selected ? '#333' : ''}">
    <span class="list__item item_actions" v-if="actionsVisible">
      <q-icon v-for="(action, i) in actions" :key="i" @click.stop.native="clickHandler(index, action.type, item)" :class="action.classes" class="cursor-pointer on-left" :name="action.icon">
        <q-tooltip>{{action.label}}</q-tooltip>
      </q-icon>
    </span>
    <span
      v-for="(prop, k) in cols"
      :key="prop.name + k"
      class="list__item"
      :class="{[`item_${k}`]: true}"
      :title="values[prop.name].value"
      :style="{color: item['x-flespi-filter-fields'] && item['x-flespi-filter-fields'].includes(prop.name) ? '#4caf50' : ''}"
    >
      <!--<q-tooltip>{{values[prop.name].value}}</q-tooltip>-->
      {{values[prop.name].value}}
    </span>
    <span v-if="etcVisible" class="list__item item_etc">
      {{values.etc.value || '*Empty*'}}
    </span>
    </div>
    <div
      v-else-if="item['x-flespi-filter-prev'] || item['x-flespi-filter-next']"
      :style="{
      height: `${itemHeight}px`,
      width: `${rowWidth}px`,
      color: '#000',
      fontWeight: 'bold',
      backgroundColor: item['x-flespi-filter-prev'] ? '#819002' : '#ccb300',
      overflow: 'hidden'
    }"
    >
      <span class="uppercase text-white" style="padding: 0 5px;" >{{item['x-flespi-filter-next'] ? `Next results will be filtered by: "${item['x-flespi-filter-next']}"` : `Filter removed: "${item['x-flespi-filter-prev']}"`}}</span>
    </div>
    <div
      v-else
      :style="{
      height: `${itemHeight}px`,
      width: `${rowWidth}px`,
      border: 'solid 1px #000',
      color: '#000',
      fontWeight: 'bold',
      backgroundColor: item.__connectionStatus === 'offline' ? '#ff0' : '#0f0',
      backgroundImage: 'url(./statics/police.png)',
      overflow: 'hidden',
      opacity: '.7'
    }"
      :title="date.formatDate(item.timestamp * 1000, 'DD/MM/YYYY HH:mm:ss')"
    >
      <span style="padding: 0 5px; margin-left: 150px;" :style="{ backgroundColor: item.__connectionStatus === 'offline' ? '#ff0' : '#0f0'}" class="uppercase" v-for="n in Array(10)" :key="n">{{item['__connectionStatus']}}</span>
    </div>
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  props: [
    'item',
    'index',
    'actions',
    'cols',
    'itemHeight',
    'etcVisible',
    'rowWidth',
    'actionsVisible',
    'selected'
  ],
  data () {
    return {
      date: date
    }
  },
  computed: {
    values () {
      let vals = this.cols.reduce((res, col, index, arr) => {
        res[col.name] = {value: null}
        if (index === arr.length - 1) {
          res.etc = {value: ''}
        }
        return res
      }, {})
      Object.keys(this.item).forEach((propName) => {
        if (propName.indexOf('#') !== -1) {
          let splitedName = propName.split('#'),
            name = splitedName[0],
            index = splitedName[1]
          if (vals[name]) {
            if (!vals[name].value) {
              vals[name].value = {}
            } else if (typeof vals[name].value !== 'object') {
              let value = vals[name].value
              vals[name].value = { [index - 1]: value }
            }
            vals[name].value[index] = JSON.stringify(this.item[propName])
          } else {
            vals.etc.value += `${propName}: ${JSON.stringify(this.item[propName])}; `
          }
        } else if (vals[propName]) {
          let value = this.item[propName]
          if (propName.indexOf('image.bin.') !== -1) {
            value = '<binary image>'
          } else if (propName.indexOf('proxy.event') !== -1) {
            value = value === 0 ? 'data received' : value === 1 ? 'connected' : 'disconnect'
          } else if (propName.indexOf('proxy.source') !== -1) {
            value = value === 0 ? 'channel incoming connection' : `target ${value}`
          } else if (propName.match(/timestamp$/)) {
            value = date.formatDate(value * 1000, 'DD/MM/YYYY HH:mm:ss')
          }
          if (typeof value === 'string') {
            vals[propName].value = value
          } else {
            vals[propName].value = JSON.stringify(value)
          }
        } else {
          if (
            propName === '__status' ||
            propName === 'x-flespi-filter-fields' ||
            propName === 'x-flespi-filter-next' ||
            propName === 'x-flespi-filter-prev'
          ) { return false }
          vals.etc.value += `${propName}: ${JSON.stringify(this.item[propName])}; `
        }
      })
      Object.keys(vals).forEach((key) => {
        if (typeof vals[key].value === 'object' && vals[key].value) {
          if (vals[key].value instanceof Array) {
            let buff = vals[key].value.reduce((acc, item, index, arr) => {
              acc += item
              if (index !== arr.length - 1) {
                acc += ', '
              }
              return acc
            }, '')
            vals[key].value = buff
          } else if (vals[key].value instanceof Object) {
            let buff = Object.keys(vals[key].value).reduce((acc, name, index, arr) => {
              acc += `${name}: ${vals[key].value[name]}`
              if (index !== arr.length - 1) {
                acc += ', '
              }
              return acc
            }, '')
            vals[key].value = buff
          }
        }
      })
      return vals
    },
    clearItem () {
      return Object.keys(this.item).reduce((result, key) => {
        if (
          key === 'delimiter' ||
          key === '__status' ||
          key === 'x-flespi-filter-fields' ||
          key === 'x-flespi-filter-next' ||
          key === 'x-flespi-filter-prev'
        ) {
          return result
        }
        result[key] = this.item[key]
        return result
      }, {})
    }
  },
  methods: {
    clickHandler (index, type, content) {
      this.$emit(`action`, {index, type, content})
    },
    itemClickHandler (index, content, event) {
      this.$emit(`item-click`, {index, content, event})
    }
  }
}
</script>

<style lang="stylus">
  .list__item
    display inline-block
    white-space nowrap
    margin 0 10px 0 5px
    text-overflow ellipsis
    overflow hidden
  .message-viewer .q-w-list>.missed-items
    background-color rgba(255,255,255,.05)
    &:nth-child(odd)
      background-color rgba(255,255,255,.1)
</style>
