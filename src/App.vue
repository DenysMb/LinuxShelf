<template>
  <div id="app">
    <Header>
      <div id="nav">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
        <Breadcrumb separator="<span style='color: #e25252'>/</span>">
            <BreadcrumbItem to="/">Home</BreadcrumbItem>
            <BreadcrumbItem to="/shelf">Shelf</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Header>
    <Content style="padding: 20px;">
      <router-view />
    </Content>
  </div>
</template>

<style lang="sass">
#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding-top: 20px
  & a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983

.ivu-layout-header
  background: none !important
  padding: 0 !important
  height: auto !important
  line-height: 0 !important

.btn-primary
  background-color: #e25252 !important
  border-color: #e25252 !important
  transition: all 0.2s !important
  &:hover
    background-color: #e25252 !important
    border-color: #e25252 !important
    opacity: 0.8 !important
    transition: all 0.2s !important
  &:focus
    box-shadow: 0 0 0 2px rgba(226, 82, 82,.2) !important

.btn-default
  &:hover
    border-color: #e25252 !important
    color: #e25252 !important
  &:focus
    box-shadow: 0 0 0 2px rgba(226, 82, 82,.2) !important
    border-color: #e25252 !important
    color: #e25252 !important

@media (max-width: 600px)
  .ivu-card-body
    padding: 5px !important
</style>
