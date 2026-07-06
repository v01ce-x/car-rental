<script setup lang="ts">
import { FormField, FormInput, FormRange } from '@/shared/ui';
</script>

<template>
  <div class="grid gap-y-4">
    <h4 class="text-[18px] text-foreground">Стоимость</h4>

    <div class="flex gap-x-4">
      <FormField label="от" class="max-w-51.5">
        <FormInput placeholder="0 руб" />
      </FormField>
      <FormField label="до" class="max-w-51.5">
        <FormInput placeholder="100 000 руб" />
      </FormField>
    </div>

    <FormRange />
  </div>
</template>
