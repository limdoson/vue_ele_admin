import { shallowMount } from '@vue/test-utils'
import Abc from '@/components/useing-import/Abc.vue'

describe('Abc', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message'
        const wrapper = shallowMount(Abc, {
            propsData: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    })
})