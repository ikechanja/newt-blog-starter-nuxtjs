<template>
  <header class="Header">
    <div v-if="$route.path === '/'" class="Title">
      <span v-if="icon" class="Title_Icon">{{icon}}</span>
      <h1 class="Title_Text">{{title}}</h1>
    </div>
    <div v-else class="Title">
      <NuxtLink to="../" class="Title_Button">
        <svg width="7" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M.2 5.85477131c.01386477-.23590466.11091814-.46783342.29116012-.6480754l4.6138027-4.6138027.08722081-.07770635c.39251766-.31082546.96436305-.28492334 1.32699275.07770636.39052429.3905243.39052429 1.02368927 0 1.41421356L2.609 5.916l3.91017638 3.91069591c.39052429.39052429.39052429 1.02368929 0 1.41421359-.3626297.3626297-.93447509.3885318-1.32699275.0777063l-.08722081-.0777063-4.6138027-4.61380272C.31091814 6.4468648.21386477 6.21493605.2 5.97903139z" fill="#333" fill-rule="nonzero" /></svg>
      </NuxtLink>
      <div class="Title_Text">{{title}}</div>
    </div>
    <div class="Search">
      <button type="button" class="Search_Button" @click="focusInput">
        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M9.3890873 1.6109127c1.81744 1.81743998 2.0970461 4.59036739.8388184 6.7018035l3.3116969 3.3126728c.3547755.3547755.3257954.9589604-.0647289 1.3494847-.3626297.3626297-.9094871.4135198-1.2698126.1348865l-.0796721-.0701576-3.22015474-3.21985629C6.7465078 11.5258295 3.60410194 11.3822765 1.6109127 9.3890873c-2.1478836-2.14788361-2.1478836-5.63029099 0-7.7781746 2.14788361-2.1478836 5.63029099-2.1478836 7.7781746 0zM2.95984943 2.95984943c-1.40288642 1.40288642-1.40288642 3.67741472 0 5.08030114 1.40288642 1.40288642 3.67741472 1.40288642 5.08030114 0 1.40288642-1.40288642 1.40288642-3.67741472 0-5.08030114-1.40288642-1.40288642-3.67741472-1.40288642-5.08030114 0z" fill="#333" fill-rule="nonzero" /></svg>
      </button>
      <form action="search/">
        <div class="Search_Input">
          <input ref="target" type="search" placeholder="Search" />
        </div>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Blog'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    focusInput() {
      this.$refs.target.focus();
    }
  },
}
</script>

<style scoped>
.Header {
  display: flex;
  background: #fff;
  padding: 8px;
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  min-width: 0;
  flex-shrink: 0;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
}
.Title {
  display: flex;
  margin: 0 auto 0 0;
  align-items: center;
  min-width: 0;
}
.Title_Icon {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 6px 0 0;
  font-size: 1.8rem;
  flex-shrink: 0;
}
.Title_Icon img {
  width: 26px;
  height: 26px;
  object-fit: cover;
  font-family: 'object-fit: cover'; /* IE11 */
  border-radius: 4px;
}
.Title_Button {
  width: 34px;
  height: 34px;
  margin: 0 6px 0 0;
  transition: background .2s;
  border-radius: 4px;
  position: relative;
  background: none;
  flex-shrink: 0;
}
.Title_Button:hover {
  background: #F0F0F0;
}
.Title_Button:active {
  background: none;
  transition: none;
}
 .Title_Button > svg {
  position: absolute;
  left: 13px;
  top: 11px;
}
.Title_Text {
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.Search {
  display: flex;
  flex-shrink: 0;
}
.Search_Input input {
  font-size: 1.6rem;
  appearance: none;
  border: none;
  height: 34px;
  padding: 0 12px;
  border-radius: 4px;
  opacity: 0;
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: -1;
}
.Search_Input input:focus {
  opacity: 1;
  z-index: 2;
}
.Search_Button {
  height: 34px;
  width: 34px;
  border: none;
  background: none;
  border-radius: 4px;
  transition: background .2s;
  cursor: pointer;
  position: relative;
  z-index: 0;
}
.Search_Button:hover {
  background: #F0F0F0;
}
.Search_Button:active {
  background: none;
  transition: none;
}
.Search_Button > svg {
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>