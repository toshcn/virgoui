<template>
    <i :class="classObject" :style="styleObject"></i>
</template>
<script>
  const prefixCls = 'vgo-icon';

  export default {
    name: 'Icon',
    props: {
      type: String,
      size: [String, Number],
      color: String,
      spin: [String, Number, Boolean]
    },
    computed: {
      classObject: function () {
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-spin`]: !!this.spin,
          [`${prefixCls}-${this.type}`]: true
        };
      },
      styleObject: function () {
        let styles = {};
        if (this.color) {
          styles['color'] = this.color;
        }
        if (this.size) {
          styles['font-size'] = `${this.size}px`;
        }
        return styles;
      }
    }
  }
</script>