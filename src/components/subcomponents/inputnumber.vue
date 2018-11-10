<template>
    <div>
        <div class="inputClass">
            <div  @click="substrict" class="left">-</div>
            <div class="middle">{{initCount}}</div>
            <div @click="add"  class="right">+</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            initCount:0
        }
    },
    created() {
        this.initCount = this.count
    },
    props:['goodsId','count'],
    methods: {
        substrict() {
            if(this.initCount==1) {
                return
            }
            this.initCount--
            this.notify()
        },
        add() {
            this.initCount++
            this.notify()
        },
        notify(){
            this.$emit('goodsCountChange',{
                goodsId: this.goodsId,
                count: this.initCount
            })
        }
    }
};
</script>

<style scoped>
.inputClass {
    display: flex;
    align-items: center
}
.left, .middle,.right{
    width: 25px;
    text-align: center;
    border: 1px solid #eee;
    line-height: 30px;
    height: 30px;
}
.middle {
    margin: 0 2px;
}
</style>


