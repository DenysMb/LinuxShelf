<template>
  <div id="app" :class="'bg-' + $store.state.color">
    <Header>
      <div id="nav">
        <div class="logo">
          LinuxShelf
        </div>
        <div>
          <input 
            class="token_input" 
            type="text" 
            placeholder="Token" 
            v-model="token"
          />
          <button 
            class="token_button"
            @click="save"
            :style="tokenButtonStyle"
          >Validate</button>
        </div>
        <div class="color_buttons">
          <Button
            type="primary"
            shape="circle"
            class="btn-black"
            icon="ios-color-palette"
            style="margin-right: 10px;"
            @click="$store.commit('changeColor', 'black')"></Button>
          <Button
            type="primary"
            shape="circle"
            class="btn-red"
            icon="ios-color-palette"
            style="margin-right: 10px;"
            @click="$store.commit('changeColor', 'red')"></Button>
          <Button
            type="primary"
            shape="circle"
            class="btn-green"
            icon="ios-color-palette"
            style="margin-right: 10px;"
            @click="$store.commit('changeColor', 'green')"></Button>
          <Button
            type="primary"
            shape="circle"
            class="btn-blue"
            icon="ios-color-palette"
            style="margin-right: 10px;"
            @click="$store.commit('changeColor', 'blue')"></Button>
          <Button
            type="primary"
            shape="circle"
            class="btn-yellow"
            icon="ios-color-palette"
            style="margin-right: 10px;"
            @click="$store.commit('changeColor', 'yellow')"></Button>
        </div>
      </div>
    </Header>
    <Content style="padding: 20px;">
      <router-view />
    </Content>
  </div>
</template>

<script>
import { db } from "@/firebase";
export default {
  firebase: {
    system: db.ref("system")
  },
  data() {
     return {
       token: ''
     }
   },
   computed: {
     tokenButtonStyle() {
       return this.token === process.env.VUE_APP_token
       ? "border-left: 2px solid green;"
       : "border-left: 2px solid red;"
     }
   },
   methods: {
     save(){
       this.$firebaseRefs.system.update({
         token: this.token
       });
     }
   },
   mounted() {
     this.title = '';
     this.save();
   },
   destroyed() {
     this.title = '';
     this.save();
   }
}
</script>

<style lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 10px
  display: flex
  align-content: center
  & a
    font-weight: bold
    color: #2c3e50
  & .logo
    flex: 1
    text-align: left
    display: flex
    align-items: center
    margin-left: 10px
    font-size: 1.25em
    font-weight: 700

.ivu-layout-header
  background: none !important
  padding: 0 !important
  height: auto !important
  line-height: 0 !important

.btn-black
  background-color: #585858 !important
  border-color: #585858 !important
  transition: all 0.2s !important
  &:hover
    background-color: #585858 !important
    border-color: #585858 !important
    opacity: 0.8 !important
    transition: all 0.2s !important
  &:focus
    box-shadow: 0 0 0 2px rgba(88, 88, 88,.2) !important

.btn-green
  background-color: #507c5c !important
  border-color: #507c5c !important
  transition: all 0.2s !important
  &:hover
    background-color: #507c5c !important
    border-color: #507c5c !important
    opacity: 0.8 !important
    transition: all 0.2s !important
  &:focus
    box-shadow: 0 0 0 2px rgba(80, 124, 92,.2) !important

.btn-red
  background-color: #b3404a !important
  border-color: #b3404a !important
  transition: all 0.2s !important
  &:hover
    background-color: #b3404a !important
    border-color: #b3404a !important
    opacity: 0.8 !important
    transition: all 0.2s !important
  &:focus
    box-shadow: 0 0 0 2px rgba(179, 64, 74,.2) !important

.btn-yellow
  background-color: #ffc61b !important
  border-color: #ffc61b !important
  transition: all 0.2s !important
  &:hover
    background-color: #ffc61b !important
    border-color: #ffc61b !important
    opacity: 0.8 !important
    transition: all 0.2s !important
  &:focus
    box-shadow: 0 0 0 2px rgba(255, 198, 27,.2) !important

.btn-blue
  background-color: #2d527c !important
  border-color: #2d527c !important
  transition: all 0.2s !important
  &:hover
    background-color: #2d527c !important
    border-color: #2d527c !important
    opacity: 0.8 !important
    transition: all 0.2s !important
  &:focus
    box-shadow: 0 0 0 2px rgba(45, 82, 124,.2) !important

.btn-default
  &:hover
    border-color: #585858 !important
    color: #585858 !important
  &:focus
    box-shadow: 0 0 0 2px rgba(88, 88, 88,.2) !important
    border-color: #585858 !important
    color: #585858 !important

.bg-black
  background-color: rgba(#585858, 0.1) !important
.bg-green
  background-color: rgba(#507c5c, 0.1) !important
.bg-red
  background-color: rgba(#b3404a, 0.1) !important
.bg-yellow
  background-color: rgba(#ffc61b, 0.1) !important
.bg-blue
  background-color: rgba(#2d527c, 0.1) !important

.token_input
  flex: 1
  background: rgba(255,255,255,.75)
  border: 1px solid rgba(0,0,0,.25)
  border-radius: 5px;
  padding: 5px;

.token_button
  background: rgba(255,255,255,.5);
  border: 1px solid rgba(0,0,0,.25)
  border-radius: 5px
  padding: 11px
  margin-left: 5px

.color_buttons
  display: flex
  justify-content: flex-end
  flex: 1

@media (max-width: 600px)
  .ivu-card-body
    padding: 5px !important
</style>
