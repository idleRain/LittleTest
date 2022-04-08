<template >
  <div>
    <div class="list">
      <div class="item" v-for="g in goodsList" :key="g.id">
        <img :src="g.picture" alt="">
        <p class="name">
          {{ g.name }}
          <template v-if="g.gift">
            <span class="tag" v-for="(gi,index) in gift" :key="index">【赠品】{{ gi }}</span>
          </template>
        </p>
        <p class="spec">{{ Object.values(g.spec).join(' / ') }}</p>
        <p class="price">{{ g.price.toFixed(2) }}</p>
        <p class="count">x{{ g.count }}</p>
        <p class="sub-total">{{ (g.price * g.count).toFixed(2) }}</p>
      </div>
    </div>
    <div class="total">
      <div>合计：<span class="amount">{{ total }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data() {
    return {
      goodsList: [
        {
          id: '4001172',
          name: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
          price: 289.9,
          picture: 'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg',
          count: 2,
          spec: {color: '白色'}
        },
        {
          id: '4001009',
          name: '竹制干泡茶盘正方形沥水茶台品茶盘',
          price: 109.8,
          picture: 'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png',
          count: 3,
          spec: {size: '40cm*40cm', color: '黑色'}
        },
        {
          id: '4001874',
          name: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
          price: 488,
          picture: 'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png',
          count: 1,
          spec: {color: '青色', sum: '一大四小'},
        },
        {
          id: '4001649',
          name: '大师监制龙泉青瓷茶叶罐',
          price: 139,
          picture: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png',
          count: 1,
          spec: {size: '小号', color: '紫色'},
          gift: '50g茶叶,清洗球,宝马'
        }
      ],
    }
  },
  computed: {
    total() {
      return this.goodsList.reduce((prev, item) => prev + item.price * item.count, 0).toFixed(2)
    },
    gift() {
      let arr = []
      this.goodsList.forEach(item => {
        if (item.gift) {
          arr = item.gift.split(',')
        }
      })
      console.log(arr)
      return arr
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.list {
  width: 990px;
  margin: 100px auto 0;
}

.item {
  padding: 15px;
  transition: all .5s;
  display: flex;
  border-top: 1px solid #e4e4e4;
}

.item:nth-child(4n) {
  margin-left: 0;
}

.item:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}

.item img {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

.item .name {
  font-size: 18px;
  margin-right: 10px;
  color: #333;
  flex: 2;
}

.item .name .tag {
  display: block;
  padding: 2px;
  font-size: 12px;
  color: #999;
}

.item .price,
.item .sub-total {
  font-size: 18px;
  color: firebrick;
  flex: 1;
}

.item .price::before,
.item .sub-total::before,
.amount::before {
  content: "¥";
  font-size: 12px;
}

.item .spec {
  flex: 2;
  color: #888;
  font-size: 14px;
}

.item .count {
  flex: 1;
  color: #aaa;
}

.total {
  width: 990px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e4e4e4;
  padding: 20px;
}

.total .amount {
  font-size: 18px;
  color: firebrick;
  font-weight: bold;
  margin-right: 50px;
}
</style>