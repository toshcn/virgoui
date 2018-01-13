<template>
    <div :class="classObject" :style="styleObject">
        <slot></slot>
    </div>
</template>

<script>
  import { findParentComponent } from '../../util/helper';
  const prefixCls = 'vgo-col';
  export default {
    name: 'Row',
    props: {
      span: {
        type: [Number, String],
        default: 24
      },
      order: [Number, String],
      offset: [Number, String],
      push: [Number, String],
      pull: [Number, String],
      className: String,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object]
    },
    data () {
      return {
        gutter: 0
      };
    },
    computed: {
      classObject () {
        let classList = {
          [`${prefixCls}`]: true,
          [`${prefixCls}-${this.span}`]: this.span,
          [`${prefixCls}-order-${this.order}`]: this.order,
          [`${prefixCls}-offset-${this.offset}`]: this.offset,
          [`${prefixCls}-push-${this.push}`]: this.push,
          [`${prefixCls}-pull-${this.pull}`]: this.pull,
          [`${this.className}`]: !!this.className
        };
        ['xs', 'sm', 'md', 'lg'].forEach(size => {
          if (typeof this[size] === 'number') {
            classList.push(`${prefixCls}-span-${size}-${this[size]}`);
          } else if (typeof this[size] === 'object') {
            let props = this[size];
            Object.keys(props).forEach(prop => {
              classList.push(
                prop !== 'span'
                  ? `${prefixCls}-${size}-${prop}-${props[prop]}`
                  : `${prefixCls}-span-${size}-${props[prop]}`
              );
            });
          }
        });

        return classList;
      },
      styleObject () {
        let gutter = this.gutter;
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
      updateGutter () {
        const Row = findParentComponent(this, 'Row');
        if (Row) {
          Row.updateGutter(Row.gutter);
        }
      }
    },
    mounted () {
      this.updateGutter();
    },
    beforeDestroy () {
      this.updateGutter();
    }
  }
</script>