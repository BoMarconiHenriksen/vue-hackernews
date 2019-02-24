# Testing rendered component output
### Testing rendered text
Test at en komponent render tekst, og at et specifikt DOM element render den korekte tekst.  
##### Send props til en komponent med muligheden for at bruge mount
```
const wrapper = shallowMount(Item, {
    propsData: {

    }
})
```
##### Test at en komponent render tekst(lige meget hvor)
Brug ```.toContain```
```expect(wrapper.text()).toContain('Hello, World!)```
```
describe('Item.vue', () => {
    test('renders item.url', () => {
        const item = {
            url: 10
        }
        const wrapper = shallowMount(Item, {
            propsData: { item } // sender item objektet som props til Item.
        });
        expect(wrapper.text()).toContain(item.url)
    });
});
```
##### Brug find
find søger i wrapper render træet, og returner den første node, der matcher.  
```wrapper.find('a').text()``` - Finder noden med det første ```<a>``` element.  
##### Test tekst indholdet af et element
Tester tekst der skal renders i et ```<a>``` element.  
```
describe('Item.vue', () => {
    test('renders a link to the item.url with item.title as text', () => {
        const item = {
            title: 'some title'
        }
        const wrapper = shallowMount(Item, {
            propsData: { item }
        });
        expect(wrapper.find('a').text()).toBe(item.title)
    });
});
```
I komponenten.  
```
<a> {{ item.title }} </a>
```
##### Test DOM attributer eks. href
wrapper har en attributes metode, der returner et objekt af komponentens attributer.  
```
expect(wrapper.attributes().href).toBe('http://google.com')
```
Undgå boolean assertions da de ikke giver en god hjælp til at finde ud af, hvad fejlen er.  
```
describe('Item.vue', () => {
    test('renders a link to the item.url with item.title as text', () => {
        const item = {
            url: 'http://google.com',
            title: 'some title'
        }
        const wrapper = shallowMount(Item, {
            propsData: { item }
        });
        const a = wrapper.find('a');
        expect(a.text()).toBe(item.title);
        expect(a.attributes().href).toBe(item.url);
    });
});
```
I komponenten.  
```
<a :href="item.url"> {{ item.title }} </a>
```
### Test hvor mange komponenter der bliver renderet
Kan bruges til at test om en root komponent render en child komponent.  
Brug findAll metoden.  
findAll metoden leder i den renderet output efter noder, der matcher en selector, og returner et array af objekter indeholdene wrappers af matchende noder.  
```
const wrapper = mount(ItemList)
wrapper.findAll('div').length
```
##### Brug en komponent som selector
```
import Item from '../src/Item.vue'

const wrapper = mount(ItemList)
wrapper.findAll(Item).length
```
##### Test child komponent
Lav en ny testfil, der hedder ItemList.spec.js
```
import { shallowMount } from '@vue/test-utils'
import ItemList from '../../views/ItemList.vue'
import Item from '../Item.vue'

describe('ItemList.vue', () => {
    test('renders an item for each item in window.items', () => {
        window.items = [ {}, {}, {} ] // items data som komponenten bruger.
        const wrapper = shallowMount(ItemList); // Mount ItemList
        expect(wrapper.findAll(Item)).toHaveLength(window.items.length);

    });
});
```
I ItemList.vue  
```
<template>
  <div class="item-list">
    <!-- render en Item for hvert objekt i displayItems arrayet -->
    <item v-for="item in displayItems" :key="item.id" />
  </div>
</template>

<script>
import Item from '../components/Item.vue'

export default {
  components: {
    Item
  },
  data () {
    displayItems: window.items
  }
}
</script>
```
### Test komponenters props
Hver Item skal modtage den rigtige data som prop.  
Brug props metoden.  
props metoden returner et objekt, der indeholder et objekt med de props fra en wrapper komponent instans og deres værdier.  
```
const wrapper = shallowMount(TestComponent)
expect(wrapper.find(childKomponent).props().propA).toBe('eksempel prop')
```
```
items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toBe(window.items[i])
    });
```
I ItemList.vue  
```
<template>
  <div class="item-list-view">
    <div class="item-list">
      <item
        v-for="item in displayItems"
        :key="item.id"
        :item="item" // Giver item med som item prop til Item komponenten.
      />
    </div>
  </div>
</template>
```
### Test classes
```
import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgreeBar.vue', () => {
    test('is hidden on initial render', () => {
        const wrapper = shallowMount(ProgressBar);
        expect(wrapper.classes()).toContain('hidden');
    });
});
```
I ProgressBar.vue  
```
<template>
  <div
    class="hidden"
    :style="{
    'width': '0%'
  }" />
</template>
```
##### Test inline style
Test inline style, hvis du bruger inline style dynamisk.  
```
wrapper.element.style.color
```
```
describe('ProgreeBar.vue', () => {
    test('initialize with 0% width', () => {
        const wrapper = shallowMount(ProgressBar);
        expect(wrapper.element.style.width).toBe('0%');
    });
});
```
### Hvornår skal du skrive test ved komponent output
1. Test kun putput, der er dynamisk generet.  
2. Test kun output, der er en del af komponentens kontrakt.  






