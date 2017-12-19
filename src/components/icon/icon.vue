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
      spin: [String, Boolean]
    },
    computed: {
      classObject: function () {
        return {
          [`${prefixCls}`]: true,
          'vgo-icon-spin': !!this.spin || this.type === 'spinner',
          [`${prefixCls}-${this.type}`]: true
        }
      },
      styleObject: function () {
        let styles = {};
        if (this.color) {
          styles['color'] = this.color;
        }
        if (this.fontSize) {
          styles['font-size'] = `${this.size}px`;
        }
      }
    }
  }
</script>