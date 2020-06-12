<!--
 * @Author: leem
 * @Date: 2020-06-08 23:34:35
 * @LastEditTime: 2020-06-11 23:15:17
 * @Description: file content
--> 
<template>
    <div class='index'>
        <lds-search-card
            v-model='formData'
            :options='formOptions'
            @search='search'></lds-search-card>
        <lds-table></lds-table>
    </div>
</template>

<script>
    import {testApi} from '@itf/system'
    console.log(testApi({
        size : 20,
        page :1
    }))
    export default {
        data () {
            return {
                formData : {
                    number : null,
                    name : null,
                    sex : null,
                    a : null,
                    b :null
                },
                formOptions : [
                    {
                        label : '数量',
                        prop : 'number',
                        type : 'input',
                        clearable :true,
                    },{
                        label : '姓名',
                        prop : 'name',
                        type : 'input',
                    },{
                        label : '性别',
                        prop : 'sex',
                        type : 'input',
                        inDrawer : true
                    }
                ]
            }
        },
        methods : {
            async search () {
                let data = await testApi({
                    size : 20,
                    page :1
                })
                console.log(data)
            },

        }
    }
</script>

