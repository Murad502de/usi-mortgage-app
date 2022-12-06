<template>
<component class="mt-svg__icon" v-show="!preloader" :is="getIconCmpName({ name, })" :color="color" @click="svgClickHandler" />
<component class="mt-svg__loader" v-show="preloader" :is="getIconCmpName({ name: preloaderName, })" :color="preloaderColor" />
</template>

<script lang="ts" src="./script.ts" />
<style lang="scss" src="./styles.scss" />