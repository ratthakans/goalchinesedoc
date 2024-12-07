<template>
  <v-app-bar flat app color="white">
    <v-spacer />
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar size="42" color="grey">
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>john@google.com</v-list-item-title>
          <v-list-item-subtitle>Admin</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-btn icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup></script>

<style lang="scss" scoped></style>
