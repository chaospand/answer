<template>
  <div class="center">
    <div class="main3">
    <a-list item-layout="horizontal" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-list-item-meta
        >

          <div slot="title">{{index+"、"+item.querstion}}</div>
        </a-list-item-meta>
        <div>{{ item.answer }}</div>
      </a-list-item>
    </a-list>
    </div>
  </div>


</template>

<script>
import { ANSWER_DATA } from '@/utils/answerData'



export default {
  components: {
  },
  data () {
    return {
      data:[],
      searchWord:''
    }
  },
  created () {
    console.log(ANSWER_DATA)
    this.data = ANSWER_DATA
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.main2 {
  min-width: 360px;
  width: 568px;
  margin: 0 auto;
}
.main3 {
  min-width: 360px;
  width: 668px;
  margin: 0 auto;
}
</style>
