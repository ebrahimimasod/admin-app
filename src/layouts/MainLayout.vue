<template>
  <q-layout view="lHr LpR lfr">
    <app-header/>
    <app-sidebar :show-menu="showMenu"/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import AppHeader from "../components/header";
import AppSidebar from "../components/sidebar";
export default {
  components: {AppSidebar, AppHeader},
  data () {
    return {
      showMenu: true,
    }
  }
}
</script>
