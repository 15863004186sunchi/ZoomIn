<template>
  <div id="app">
    <div>
      <div class="leftBoardStyle" id="leftBoardStyle">
        <el-button @click="btnClick" class="sizeBtn" id="sizeBtn">
          <icon name="angle-left" v-show="iconFlag"></icon>
          <icon name="angle-right" v-show="!iconFlag"></icon>
        </el-button>
        <!-- <transition name="el-zoom-in-center"> -->
        <div v-show="leftVisiable" class="transition-box">
          <table-info style="margin-bottom: 50px" v-show="leftVisiable"></table-info>
          <div class="demo_line_02" id="demo_line_02">
            <span>维度数值</span>
          </div>
          <drag></drag>
        </div>
        <!-- </transition> -->
      </div>

      <div>
        <div class="app-border" id="app-border">
          <!-- 由于导航栏的问题，临时下降1px -->
          <div id="drop">
            <!-- <el-card> -->
            <!-- <el-col :span="24"> -->
            <drop></drop>
            <!-- </el-col> -->
            <!-- <el-col :span="24"> -->
            <drop-filter></drop-filter>
            <!-- </el-col> -->
            <!-- </el-card> -->
          </div>

          <!-- <div> -->
          <echarts></echarts>
          <!-- </div> -->
        </div>
      </div>

      <div class="rightBoardStyle" id="rightBoardStyle">
        <div>
          <rightBoard/>
        </div>
      </div>
    </div>

    <axios-distribute></axios-distribute>
  </div>
</template>

<script>
import drag from "./drag";
import drop from "./drop";
import dropFilter from "./dropFilter";
import echarts from "./echarts";
import rightBoard from "./rightBoard";
import AxiosDistribute from "./AxiosDistribute";
import tableInfo from "./tableInfo";
import Bus from "./Bus.js";

export default {
  name: "App",
  components: {
    drag: drag,
    drop: drop,
    echarts: echarts,
    rightBoard: rightBoard,
    AxiosDistribute,
    dropFilter,
    tableInfo
  },
  data() {
    return {
      isCollapse: true,
      spanParms: [3, 17, 4],
      hackReset: true,
      leftFlag: true,
      iconFlag: true,
      leftVisiable: true
    };
  },
  created() {
    this.$store.commit("changeIndex", { index: "dataAnalysis" });
  },
  methods: {
    btnClick() {
      Bus.$emit("leftChange", this.leftVisiable);
      if (this.leftFlag) this.spanParms = [1, 22, 1];
      else this.spanParms = [3, 17, 4];
      this.leftFlag = !this.leftFlag;
      this.iconFlag = !this.iconFlag;
      this.leftVisiable = !this.leftVisiable;
    }
  },
  mounted() {
    console.log(document.getElementById("demo_line_02").offsetTop);
    console.log(document.getElementById("app-border").offsetHeight);
    // document.getElementById('dragCon').style.height=document.getElementById('app-border').offsetHeight-document.getElementById('demo_line_02').offsetTop-55+'px'
    // document.getElementById('dragCon').style.height = 480 + 'px'
    // document.getElementById("dragCon").style.height =
    //   document.getElementById("app-border").offsetHeight -
    //   document.getElementById("demo_line_02").offsetTop -
    //   50 +
    //   "px";

    document.getElementById("sizeBtn").style.marginTop =
      document.getElementById("app").offsetHeight / 2.5 + "px";
  }
};
</script>

<style scoped>
#drop {
  min-width: 1000px;
  height: 100px;
  padding: 20px 30px 20px 20px;
}

::-webkit-scrollbar-track {
  border-radius: 2px;
  background: rgba(128, 133, 144, 0.06);
}

::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: rgba(128, 133, 144, 0.3);
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-webkit-scrollbar-button {
  display: block;
  width: 0;
  height: 0;
}

::-webkit-scrollbar {
  width: 14px;
  height: 14px;
  padding: 0;
}

#app {
  font-family: "Microsoft YaHei", "微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5a616a;
  overflow: hidden;
}

.app-border {
  position: relative;
  overflow-x: auto;
  height: calc(100vh - 60px);
  margin: 0 250px 0 200px;
  padding: 0 20px;
}

/* 顶替dataProcessing冲突的样式 */
.el-row {
  margin-bottom: 0px;
}

.el-col {
  border-radius: 0px;
}

.sizeBtn {
  width: 1px;
  position: absolute;
  right: 0px;
  margin-top: 30px;
  border: 0;
  z-index: 999;
}

.leftBoardStyle {
  position: fixed;
  z-index: 3;
  overflow-x: hidden;
  overflow-y: auto;
  top: 60px;
  bottom: 0;
  width: 200px;
  padding: 10px;
  background: #fff;
  box-shadow: 10px 10px 20px -10px rgba(0, 0, 0, 0.2);
}

.rightBoardStyle {
  position: fixed;
  z-index: 2;
  overflow-x: hidden;
  overflow-y: auto;
  top: 60px;
  bottom: 0;
  right: 0;
  width: 250px;
  padding: 10px;
  background: #fff;
  box-shadow: -10px 10px 20px -10px rgba(0, 0, 0, 0.2);
}

.demo_line_02 {
  height: 1px;
  border-top: 1px solid rgb(200, 200, 200);
  text-align: center;
}

.demo_line_02 span {
  position: relative;
  top: -8px;
  background: #fff;
  padding: 0 20px;
}
</style>
