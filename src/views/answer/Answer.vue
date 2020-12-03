<template>
  <div class="center">
    <div class="main2">
      <a-input placeholder="请输入要检索文字的三个以上的拼音首字母，例如：秦始皇=qsh"       v-model="searchWord"
               allowClear @change="checkKey"/>
    </div>
    <div class="main3">
    <a-list item-layout="horizontal" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-list-item-meta
        >
          <div slot="title" v-html="item.querstion"></div>
        </a-list-item-meta>
        <div>{{ item.answer }}</div>
      </a-list-item>
    </a-list>
    </div>
  </div>


</template>

<script>

import { ANSWER_DATA } from '@/utils/answerData'
import PinyinMatch from 'pinyin-match'

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
    const test = '秦始皇陪葬铜车马模型，单辕双轮，车厢为横长方形，车门在车厢的后面，车上有圆形的铜伞，伞下站着御官，双手驭车，前驾四匹马。以下哪个不是图中铜车马的名称'
    console.log('PinyinMatch', PinyinMatch.match(test, 'cmm'))
  },
  methods: {
    checkKey(e){
      console.log(e);
      console.log(this.searchWord)

      let searchWord = this.searchWord
      if(searchWord.length>2){
        let result = localStorage.getItem(searchWord);
        console.log(result)
        if(result==null){
          result = ANSWER_DATA;
        }else{
          result = JSON.parse(result);
        }
        let localData = [];
        console.log(result)
        console.log("in for",searchWord)
        this.data = [];
        for(let i=0;i<result.length;i++){
          let perData = result[i];
          let querstion = perData.querstion;
          console.log(querstion+searchWord)
          let matchs = PinyinMatch.match(querstion,searchWord);

          console.log("matchs",matchs)

          if(matchs){
            let keyFirst = matchs[0];
            let keyEnd = matchs[matchs.length-1];
            let firstPart = querstion.substr(0,keyFirst);
            let keyWord = querstion.substr(keyFirst,keyEnd-keyFirst+1);
            let endPart = querstion.substr(keyEnd+1);
            let resultPerData = {};
            resultPerData.querstion = firstPart + '<font color="#f75353">' + keyWord + "</font>"+endPart;
            resultPerData.answer = perData.answer;
            this.data.push(resultPerData)
          }

          //localStorage.setItem(this.searchWord,JSON.stringify(localData))
        }
        console.log(this.data)

      }else{
        this.data=[];
      }
    },
    isContinuityNum(array){
      console.log("array length",array.length)
      if(array.length==undefined || array.length<1){
        return false;
      }
      console.log("array",array)
      let i=array[0];
      let isContinuation=true;
      for(let e in array){
        if(array[e]!=i){
          isContinuation=false;
          break;
        }
        i++;
      }
      return isContinuation;
    },
    brightenKeyword(val,keyArrays){

    }
    // brightenKeyword(val, keyword) {
    //   if (keyword.length > 0) {
    //     let keywordArr = keyword.split("");
    //     val = val + "";
    //     keywordArr.forEach(item => {
    //       if (val.indexOf(item) !== -1 && item !== "") {
    //         val = val.replace(
    //           new RegExp(item,'g'),
    //           '<font color="#f75353">' + item + "</font>"
    //         );
    //       }
    //     });
    //     return val;
    //   } else {
    //     return val;
    //   }
    // }
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
