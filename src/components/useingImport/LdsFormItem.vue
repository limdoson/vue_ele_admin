<template>
    <span>
        <el-form-item :label='option.label' :prop='option.prop'>
            <!-- input -->
            <template v-if='option.type == `input`'>
                <el-input 
                    v-model.trim='result'
                    @change='changeHandle'
                    @clear='clearHandle'
                    @blur='blurHandle'
                    @focus="focusHandle"
                    :placeholder="option.placeholder ? option.placeholder : defualtPlaceholder"
                    :disabled="option.disabled ? option.disabled :false"
                    :readonly="option.readonly ? option.readonly :false"
                    :clearable="option.clearable ? option.clearable : false"
                    :type='option.inputType ? option.inputType : `text`'></el-input>
            </template>
            <!-- radio -->
            <template v-if='option.type == `radio`'>
                <lds-radio 
                    v-model='result'
                    :disabled="option.disabled ? option.disabled :false"
                    :readonly="option.readonly ? option.readonly :false"
                    :changeCallBack='option.changeCallBack || null'
                    :option-code='option.optionCode'
                    :option-data='option.optionData'></lds-radio>
            </template>
            <!-- select -->
            <template v-if='option.type == `select`'>
                <lds-select
                    v-model='result'
                    :disabled="option.disabled ? option.disabled :false"
                    :readonly="option.readonly ? option.readonly :false"
                    :placeholder='option.placeholder'
                    :changeCallBack='option.changeCallBack || null'
                    :clearCallBack='option.clearCallBack || null'
                    :blurCallBack='option.blurCallBack || null'
                    :focusCallBack='option.focusCallBack || null'
                    :option-code='option.optionCode'
                    :option-data='option.optionData'
                    :clearable="option.clearable"
                    :multiple='option.multiple'
                    :filterable='option.filterable'
                    :option-load-mode='option.optionLoadMode'></lds-select>
            </template>
            <!-- cascader -->
            <template v-if='option.type == `cascader`'>
                <lds-cascader
                    v-model='result'
                    :disabled='option.disabled'
                    :placeholder='option.placeholder'
                    :changeCallBack='option.changeCallBack || null'
                    :clearCallBack='option.clearCallBack || null'
                    :blurCallBack='option.blurCallBack || null'
                    :focusCallBack='option.focusCallBack || null'
                    :option-code='option.optionCode'
                    :option-data='option.optionData'
                    :option-load-mode='option.optionLoadMode'></lds-cascader>
            </template>
        </el-form-item>
    </span>
</template>

<script>
    import ldsRadio from '@c/useingImport/LdsRadio'
    import ldsSelect from '@c/useingImport/LdsSelect'
    import ldsCascader from '@c/useingImport/LdsCascader'
    export default {
        components : {
            ldsRadio,
            ldsSelect,
            ldsCascader
        },
        props : {
            option : {
                type : Object,
                required :true
            },
            value : {
                
            },
            emitHandle :{
                type :Function
            }
        },
        computed : {
            defualtPlaceholder () {
                if (this.option.type == 'input') {
                    return '请输入内容'
                } else {
                    return '请选择'
                }
            }
        },
        data() {
            return {
                result : this.value
            };
        },
        created () {
            // console.log(this.value)
        },
        methods :{
            changeHandle (val) {
                if (this.option.changeCallBack && val) {
                    this.option.changeCallBack(val)
                }
            },
            clearHandle (val) {
                if (this.option.clearCallBack) {
                   
                    if (this.option.defaultValue) {
                        this.option.clearCallBack(this.option.defaultValue);
                        this.$emit('input', this.option.defaultValue)
                    } else {
                        this.option.clearCallBack();
                    }
                }
            },
            blurHandle (e) {
                if (this.option.blurCallBack) {
                    this.option.blurCallBack(e)
                }
            },
            focusHandle (e) {
                if (this.option.focusCallBack) {
                    this.option.focusCallBack(e)
                }
            }
        },
        watch : {
            value (n) {
                this.result = n;
            },
            result (n) {
                this.$emit('input', n)
            }
        }
    }
</script>