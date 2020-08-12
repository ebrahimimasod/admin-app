<template>
  <q-drawer
    show-if-above
    v-model="showMenu"
    side="left"
    :width="300"
    :breakpoint="400"
  >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
      <q-list
        padding
        bordered>
        <q-item
          v-for="(menu , index) in sidebarMenu"
          :key="index"
          :to="menu.link"
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon
              color="primary"
              :name="menu.icon" />
          </q-item-section>
          <q-item-section>{{menu.name}}</q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
      <div class="absolute-bottom bg-transparent text-center">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
        <div class="text-weight-bold ">Razvan Stoenescu</div>

      </div>
    </q-img>
  </q-drawer>

</template>

<script>
export default {
  name: 'AppSidebar',
  data:()=>({
    sidebarMenu:[
      {
        name:'داشبورد',
        icon:'menu',
        link:'#'
      },
      {
        name:'مدیران',
        icon:'menu',
        link:'/managers'
      },
      {
        name:'کاربران',
        icon:'menu',
        link:'/users'
      },
      {
        name:'دسته بندی ها',
        icon:'menu',
        link:'/categories'
      },
      {
        name:'محصولات',
        icon:'menu',
        link:'/products'
      },
      {
        name:'سفارشات',
        icon:'menu',
        link:'/orders'
      },
      {
        name:'پرداخت ها',
        icon:'menu',
        link:'/payments'
      },
      {
        name:'فروشندگان',
        icon:'menu',
        link:'/sellers'
      },
      {
        name:'تنظیمات',
        icon:'menu',
        link:'/setting'
      },
      {
        name:'خروج ',
        icon:'menu',
        link:'/logout'
      },
      {
        name:'خروج ',
        icon:'menu',
        link:'/logout'
      },
      {
        name:'خروج ',
        icon:'menu',
        link:'/logout'
      },
      {
        name:'خروج ',
        icon:'menu',
        link:'/logout'
      },
      {
        name:'خروج ',
        icon:'menu',
        link:'/logout'
      },


    ]
  }),
  props:{
    showMenu: {
      type: Boolean,
      required: true
    },
  }

}
</script>
