<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-btn
          class="q-mr-md"

          flat
          round
          icon="menu"
         />
        <q-avatar>
          <img src="/images/logo.svg">
        </q-avatar>
        پنل مدیریت
      </q-toolbar-title>
      <q-space/>
      <q-btn
        flat
        round
        icon="arrow_back"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>
