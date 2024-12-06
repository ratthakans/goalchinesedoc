<template>
  <v-app-bar flat>
    <v-spacer />
    <v-list>
      <v-list-item
        subtitle="john@google.com"
        title="Admin"
      >
        <template #prepend>
          <v-avatar
            size="42"
            color="grey"
          >
            <v-icon>mdi-account</v-icon>
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>
    <v-btn icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup></script>

<style lang="scss" scoped></style>
