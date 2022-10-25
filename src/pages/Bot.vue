<template>
  <div class="container">
    <div class="page__bot bot-page">
      <div class="bot-page__column section-list">
        <UIAccordion
            :employees="this.employees"
        />
      </div>
      <div class="bot-page__column message-section">
        <div class="message-section__title">Сообщение</div>
        <div class="message-section__text-section text-section">
          <textarea placeholder="Введите текст" class="text-section__textarea custom-textarea"></textarea>
          <div class="text-section__wrapper">
            <label class="text-section__file file-check">
              <input class="file-check__input" ref="imgInput" type="file" accept="image/*" multiple @change="uploadImg($event)">
              <img class="file-check__image" src="/img/clip.svg" alt="clip">
              <p>Файл</p>
            </label>
            <ul class="text-section__download download-image" v-show="isUpload">
              <p class="green" v-if="imgUrl.length!==0">Предварительный просмотр изображения</p>
              <li class="download-image__item" v-for="(list,index) in imgUrl" :key="list">
                <img class="download-image__image" ref="imgimg" :src="list.url" alt="">
                <div class="download-image__title">{{this.imgName}}</div>
                <button class="remove" @click="remove(index)">Удалить</button>
              </li>
            </ul>
          </div>
        </div>
        <button class="message-section__button-send"></button>
      </div>
    </div>
  </div>

</template>

<script>
import Department from "@/components/Department";
import UIAccordion from "@/components/UIAccordion";
export default {
  name: 'bot',
  components: {
    Department,
    UIAccordion
  },
  data() {
    return {
      isUpload:false,
      imgUrl:[],
      imgName:[],
      employees: [
        {
          industry: 'Дизайн',
          employee: [{id: 1, name: 'Алина Деньщикова'}, {id: 2, name: 'Алина Иванова'}],
        },
        {
          industry: 'Менеджмент',
          employee: [{id: 3, name: 'Дмитрий Петров'}, {id: 4, name: 'Алексей Иванов'}],
        },
        {
          industry: 'Разработка',
          employee: [{id: 5, name: 'Дмитрий Королев'}, {id: 6, name: 'Алексей Царев'}],
        },
        {
          industry: 'SMM',
          employee: [{id: 7, name: 'Ольга Кузнецова'}, {id: 7, name: 'Алексей Щербаков'}],
        }
      ]
    }
  },
  computed: {

  },
  methods: {

    uploadImg(e){
      // console.log(e.target.files);
      this.isUpload=true;
      let file=e.target.files[0];
      console.log(e.target.files[0])
      console.log(e.target.files[0].name)
      this.imgName = e.target.files[0].name


      let url='';
      var reader = new FileReader();

      // console.log(file1)
      //
      // for (let item in file1) {
      //   if(typeof file1[item] === 'object') {
      //     console.log(reader.readAsDataURL(file1[item]))
      //
      //   } else {
      //     console.log('not obj')
      //   }
      //
      // }
      // console.log(file[0])
      // console.log(file[1])
      // console.log(file[2])

      reader.readAsDataURL(file);

      let that=this;
      reader.onload = function (e) {
        url=this.result.substring(this.result.indexOf(',')+1);
        // that.imgUrl='data:image/png;base64,'+url
        // that.$refs['imgimg'].setAttribute('src','data:image/png;base64,'+url);
        that.imgUrl.push({
          id:that.imgUrl.length+1,
          url:'data:image/png;base64,'+url
        })
      }
    },
    remove(index){
      this.imgUrl.splice(index,1)
    }

  },
  // mounted() {
  //   let textarea = document.querySelector('custom-textarea');
  //
  //   textarea.addEventListener('keyup', function(){
  //     if(this.scrollTop > 0){
  //       this.style.height = this.scrollHeight + "px";
  //     }
  //   });
  // }
}
</script>

<style lang="scss">
@import "src/scss/variables.scss";

.bot-page {
  display: flex;
  gap: 30px;

  &__column {
    border: 1px solid #DFDFDF;
    border-radius: 10px;
    max-width: 925px;
    width: 100%;
   }
}

.download-image {

  &__item {
    list-style-type: none;
  }

  &__image {
    width: 96px;
    height: 60px;
    object-fit: contain;
  }
}

.check-all {
  display: flex;
  gap: 17px;
  cursor: pointer;

  &__checkbox {
    width: 22px;
  }

  &__text {
    font-family: $ff-m;
    font-size: 26px;
    color: #11203E;
    margin-left: 7px;
    width: 100%;
    padding: 37px 30px 14px 30px;
  }
}

.message-section {
  padding: 30px;
  height: max-content;

  &__title {
    font-family: $ff-m;
    font-size: 26px;
    color: $primaryBlack;
    margin-bottom: 30px;
  }
}

.section-list {
  &__item {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

}

.file-check {
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;


  &__input {
    display: none;
    position: absolute;
  }
}



.text-section {
  position: relative;
  display: flex;
  flex-direction: column;

  &__wrapper {
    bottom: 20px;
    width: 100%;
    padding: 15px;
    border: 1px solid #DFDFDF;
    border-top: none;
    border-radius: 0 0 10px 10px;
  }

  &__file {
    width: fit-content;
  }

  &__textarea {
    //margin-bottom: 20px;
    resize: none;
    height: 140px;
  }
}
</style>
