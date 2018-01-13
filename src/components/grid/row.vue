<template>
    <div :class="classObject" :style="styleObject">
        <slot></slot>
    </div>
</template>

<script>
  import { inArray, findChildrenComponents } from '../../util/helper';
  import enquire from 'enquire.js';

  const prefixCls = 'vgo-row';
  const responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
  const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
  };
  var screens = {};
  export default {
    name: 'Row',
    props: {
      align: {
        validator (value) {
          return inArray(value, ['top', 'middle', 'bottom']) > -1
        }
      },
      gutter: {
        type: [Number, Object],
        default: 0
      },
      justify: {
        validator (value) {
          return inArray(value, ['start', 'end', 'center', 'space-around', 'space-between']) > -1
        }
      },
      type: {
        validator (value) {
          return value === 'flex';
        }
      }
    },
    computed: {
      classObject () {
        return {
          [`${prefixCls}`]: this.type,
          [`${prefixCls}-${this.type}`]: this.type,
          [`${prefixCls}-${this.type}-${this.justify}`]: this.type && this.justify,
          [`${prefixCls}-${this.type}-${this.align}`]: this.type && this.align
        }
      },
      styleObject () {
        let gutter = this.getGutter();
        if (gutter !== 0) {
          return {
            marginLeft: gutter / -2 + 'px',
            marginRight: gutter / -2 + 'px'
          }
        }
        return {};
      }
    },
    methods: {
      getGutter () {
        if (typeof this.gutter === 'object') {
          for (let i = 0; i <= responsiveArray.length; i++) {
            const breakpoint = responsiveArray[i];
            if (this.screens[breakpoint] && this.gutter[breakpoint] !== undefined) {
              return this.gutter[breakpoint];
            }
          }
        }
        return this.gutter;
      },
      updateGutter (val) {
        const cols = findChildrenComponents(this, 'Col');
        if (cols.length) {
          cols.forEach((child) => {
            if (val > 0) child.gutter = val;
          });
        }
      }
    },
    watch: {
      gutter (val) {
        this.updateGutter(val);
      }
    },
    beforeMount () {
      Object.keys(responsiveMap)
        .map((screen) => enquire.register(responsiveMap[screen], {
          match: () => {
            if (typeof this.gutter !== 'object') {
              return;
            }
            this.screens = {
              ...this.screens,
              [screen]: true
            };
          },
          unmatch: () => {
            if (typeof this.props.gutter !== 'object') {
              return;
            }
            this.screens = {
              ...this.screens,
              [screen]: false
            };
          },
          // Keep a empty destory to avoid triggering unmatch when unregister
          destroy () {}
        }
      ));
    },
    beforeDestroy () {
      Object.keys(responsiveMap)
        .map((screen) => enquire.unregister(responsiveMap[screen]));
    }
  }
</script>
