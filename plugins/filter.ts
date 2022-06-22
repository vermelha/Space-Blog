import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  interface Vue {
    $truncate(message: string | number): string,
    $formatDate(message: string | number): string,
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $truncate(message: string | number): string,
    $formatDate(message: string | number): string,
  }

  interface Context {
    $truncate(message: string | number): string,
    $formatDate(message: string | number): string,
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $truncate(message: string | number): string,
    $formatDate(message: string | number): string,
  }
}

const myPlugin: Plugin = (context, inject) => {
  inject('formatDate', ( dateStr: string ): string => {
    const date = new Date(dateStr)
    return date.toLocaleString(['en-US'], {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
  })
  inject('truncate', (text: string, suffix = '...'): string => {
    if (text.length > 100) {
    return text.substring(0, 100) + suffix;
  } else {
      return text;
  }
  })
}

export default myPlugin






