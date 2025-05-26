import { configure } from '@japa/runner'
import { assert } from '@japa/assert'
import { specReporter } from '@japa/spec-reporter'

// Se usar API-client:
// import { apiClient } from '@japa/api-client'

configure({
  // onde estão seus testes
  files: ['./tests/**/*.spec.ts'],

  // registre os plugins que instalou
  plugins: [
    assert(),
    // apiClient(),  
  ],

  // defina o reporter para saída bonita
  reporters: [specReporter()],
})
