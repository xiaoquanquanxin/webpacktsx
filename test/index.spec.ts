import {sum} from './sum';
let s = sum(1, 4);
console.log(s);

//  npm install --save-dev jest



describe('函数单元测试', () => {
    test('函数测试基础', () => {
        expect(sum(1, 3).toBe(4))
    })
});



// expect(ul.children.length).toBe(3);
// expect(nav.textContent).toContain('xxxx');
