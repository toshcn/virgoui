<template>
    <div :class="classObject" :style="styleObject">
        <slot></slot>
    </div>
</template>

<script>
  const prefixCls = 'vgo-row';
  export default {
    name: 'Row',
    props: {
      align: String,
      gutter: [Number, Object],
      justify: String,
      type: String
    }
  }
</script>