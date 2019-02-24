import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgreeBar.vue', () => {
    test('is hidden on initial render', () => {
        const wrapper = shallowMount(ProgressBar);
        expect(wrapper.classes()).toContain('hidden');
    });
    test('initialize with 0% width', () => {
        const wrapper = shallowMount(ProgressBar);
        expect(wrapper.element.style.width).toBe('0%');
    });
});
