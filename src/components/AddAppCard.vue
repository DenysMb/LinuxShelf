<template>
  <div>
    <input
      type="file"
      id="file"
      name="file"
      class="inputfile"
      multiple
      @change="detectFiles($event.target.files)">
    <label for="file">
      <Card class="inputCard">
        <div style="text-align:center">
          <Icon type="ios-cloud-upload" class="dropHere" size="108"></Icon>
          <h3 style="opacity: 0.2;">Click here</h3>
        </div>
      </Card>
    </label>
  </div>
</template>

<script>
import { db, storage } from "@/firebase";

export default {
  firebase: {
    apps: db.ref("apps")
  },
  props: ["category"],
  methods: {
    detectFiles(fileList) {
      Array.from(Array(fileList.length).keys()).map(x => {
        this.upload(fileList[x]);
      });
    },
    upload(file) {
      let type = file.name.split('.')
      type = type[type.length-1]
      this.$Loading.start();
      storage
        .ref("debs/" + file.name)
        .put(file)
        .then(res => {
          this.$Loading.finish();
          storage
            .ref("debs/" + file.name)
            .getDownloadURL()
            .then(url =>
              this.$firebaseRefs.apps.push({
                addedIn: res.metadata.timeCreated,
                category: this.category,
                lastTimeDownloaded: res.metadata.timeCreated,
                name: res.metadata.name,
                size: parseInt(res.metadata.size, 10) / 1000000 + "Mb",
                url: url,
                type: type
              })
            );
        });
    }
  }
};
</script>

<style>
.dropHere {
  opacity: 0.1;
}
.inputfile {
  display: none;
}
.inputCard {
  width: 160px;
  height: 190px;
}
.inputCard:hover {
  box-shadow: 0 1px 6px #f9548f;
  border-color: #f9548f;
}
@media (max-width: 600px) {
  .inputCard {
    width: 160px;
    height: 170px;
  }
}
</style>
