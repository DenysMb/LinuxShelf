<template>
  <Upload
        ref="upload"
        :format="['deb']"
        :on-format-error="handleFormatError"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:160px;height:190px;">
        <Card>
          <div style="text-align:center">
            <Icon type="ios-cloud-upload" class="dropHere" size="108"></Icon>
            <h3 style="opacity: 0.2;">Click or Drop here</h3>
          </div>
        </Card>
    </Upload>
</template>

<script>
export default {
  methods: {
    handleFormatError(file) {
      this.$Notice.warning({
        title: "Arquivo com formato incorreto",
        desc:
          "O formato do arquivo " +
          file.name +
          " está incorreto. Por favor, selecione um arquivo em formato .deb",
        duration: 10
      });
    }
  }
};
</script>

<style>
.dropHere {
  opacity: 0.1;
}
.ivu-upload-drag:hover {
  border-color: #f9548f;
}
</style>
