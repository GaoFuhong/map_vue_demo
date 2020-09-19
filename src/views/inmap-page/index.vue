<template>
  <h1>在地图上层显示的内容</h1>
  <div id="allmap">
  </div>
</template>

<script>
import inMap from 'inmap'
export default {
  data () {
    return {
      inmap: '',
      overlay: '',
      animationOverlay: '',
      imgOverlay: ''
    }
  },
  mounted () {
    var data = [{ name: '北京', geometry: { type: 'Point', coordinates: ['116.3', '39.9'] }, style: { speed: 1 } }, { name: '上海', geometry: { type: 'Point', coordinates: ['121.29', '31.11'] }, style: { speed: 0.4 } }, { name: '福建', geometry: { type: 'Point', coordinates: ['117.984943', '26.050118'] }, style: { speed: 0.45 } }, { name: '广东', geometry: { type: 'Point', coordinates: ['113.394818', '23.408004'] }, style: { speed: 0.7 } }, { name: '广西', geometry: { type: 'Point', coordinates: ['108.924274', '23.552255'] }, style: { speed: 1 } }]
    var img = '../../assets/images/img.jpg'
    this.inmap = new inMap.Map({
      id: 'allmap',
      skin: 'Blueness',
      center: [105.403119, 38.028658],
      zoom: {
        value: 5,
        show: true,
        max: 18,
        min: 5
      }
    })
    this.animationOverlay = new inMap.PointAnimationOverlay({
      style: {
        fps: 25, // 动画帧数
        color: '#f18080',
        size: 30,
        speed: 0.4
      },
      data: data
    })
    this.inmap.add(this.animationOverlay)

    this.imgOverlay = new inMap.ImgOverlay({
      tooltip: {
        show: true,
        formatter: '{name}'
      },
      style: {
        normal: {
          icon: img,
          width: 40,
          height: 40,
          offsets: {
            top: '-50%',
            left: '-50%'
          }
        }
      },
      data: data
    })
    this.inmap.add(this.imgOverlay)
  }
}

</script>

<style lang="less">
h1 {
  position: absolute;
  z-index: 2;
  color: #fff;
}
#allmap {
  width: 100%;
  height: calc(100vh - 100px);
}
</style>
