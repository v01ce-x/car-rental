<script setup lang="ts">
import { FormField, FormInput, FormRange } from '@/shared/ui';
</script>

<template>
  <div class="grid gap-y-4">
    <h4 class="text-[18px] text-foreground">Стоимость</h4>

    <div class="flex gap-x-4">
      <form-field label="от" class="max-w-51.5">
        <form-input placeholder="0 руб" />
      </form-field>
      <form-field label="до" class="max-w-51.5">
        <form-input placeholder="20 000 руб" />
      </form-field>
    </div>

    <form-range />
  </div>
</template>
