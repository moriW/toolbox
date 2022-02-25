<template>
  <h3>RouteTrace</h3>
  <el-button @click=traceBack></el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Traceroute } from 'nodejs-traceroute'

export default defineComponent({
    // setup() {},
    methods: {
        traceBack() {
            Traceroute()
            .on('hop', (hop) => {
                console.log(hop)
            })
            .trace("aws.moridisa.com")
        }
    }
})
</script>
