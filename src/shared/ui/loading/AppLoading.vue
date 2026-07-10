<template>
  <div class="flex justify-center mt-10">
    <div class="h-24 w-24 animate-loading">
      <svg class="h-full w-full" viewBox="0 0 36 36">
        <defs>
          <linearGradient id="spinner-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" class="text-foreground" />
          </linearGradient>
        </defs>

        <circle
          cx="18"
          cy="18"
          r="16"
          fill="transparent"
          stroke="url(#spinner-grad)"
          stroke-width="3"
          stroke-dasharray="30 100"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>
