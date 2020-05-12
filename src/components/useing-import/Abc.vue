<template>
    <div>
        {{msg}}
        <p v-if='show'>喝喝</p>
    </div>
</template>
<script>
export default {
    props : ['msg'],
    data () {
        return {
            show :false
        }
    },
    mounted () {
        setTimeout(()=>{
            this.msg = '喝喝'
        },2000)
    }
}
</script>

