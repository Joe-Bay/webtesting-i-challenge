
const enhancer = require('./enhancer.js');
// test away!
describe('enhancer.js', () => {
    describe('.repair()', () => {
      it('returns the item with durability at 100', () => {
        const receieved = {
            name: 'axe',
            enhancement: 0,
            durability: 50,
          }
        const expected = {
            name: 'axe',
            enhancement: 0,
            durability: 100,
        }
          expect(enhancer.repair(receieved)).toEqual(expected)
      })  
    })
    
    describe('.success()', () => {
        it('returns the item with the enhancement + 1', () => {
            const receieved = {
                name: 'axe',
                enhancement: 8,
                durability: 50,
            }
            const expected = {
                name: 'axe',
                enhancement: 9,
                durability: 50,
            }
            expect(enhancer.success(receieved)).toEqual(expected)
        })  
        it('returns the item with the enhancement the same when its set at 20', () => {
            const receieved = {
                name: 'axe',
                enhancement: 20,
                durability: 50,
            }
            const expected = {
                name: 'axe',
                enhancement: 20,
                durability: 50,
            }
            expect(enhancer.success(receieved)).toEqual(expected)
        })  
        it('returns the item enhancement back to 20 if its more than 20', () => {
            const receieved = {
                name: 'axe',
                enhancement: 21,
                durability: 50,
            }
            const expected = {
                name: 'axe',
                enhancement: 20,
                durability: 50,
            }
            expect(enhancer.success(receieved)).toEqual(expected)
        })  
        it('returns the item enhancement back to 0 if its less than 0', () => {
            const receieved = {
                name: 'axe',
                enhancement: -5,
                durability: 50,
            }
            const expected = {
                name: 'axe',
                enhancement: 0,
                durability: 50,
            }
            expect(enhancer.success(receieved)).toEqual(expected)
        }) 
    })
    describe('.fail()', () => {
        it('item returns with a durability -5 because the enhancement was under level 15', () => {
            const receieved = {
                name: 'axe',
                enhancement: 8,
                durability: 50,
            }
            const expected = {
                name: 'axe',
                enhancement: 8,
                durability: 45,
            }
            expect(enhancer.fail(receieved)).toEqual(expected)
        })
        it('item returns with a durability -10 because the enhancement was above level 15 but under level 17', () => {
            const receieved = {
                name: 'axe',
                enhancement: 16,
                durability: 50,
            }
            const expected = {
                name: 'axe',
                enhancement: 16,
                durability: 40,
            }
            expect(enhancer.fail(receieved)).toEqual(expected)
        })
        it('item returns with a durability -10 and enhancement - 1 because it was level 17 or higher', () => {
            const receieved = {
                name: 'axe',
                enhancement: 18,
                durability: 50,
            }
            const expected = {
                name: 'axe',
                enhancement: 17,
                durability: 40,
            }
            expect(enhancer.fail(receieved)).toEqual(expected)
        })
        it('item passed in has durability less than 0 resets the item to have 0 durability', () => {
            const receieved = {
                name: 'axe',
                enhancement: 18,
                durability: -1,
            }
            const expected = {
                name: 'axe',
                enhancement: 18,
                durability: 0,
            }
            expect(enhancer.fail(receieved)).toEqual(expected)
        })
        it('item passed in has durability more than 100 resets the item to have 100 durability', () => {
            const receieved = {
                name: 'axe',
                enhancement: 18,
                durability: 105,
            }
            const expected = {
                name: 'axe',
                enhancement: 17,
                durability: 90,
            }
            expect(enhancer.fail(receieved)).toEqual(expected)
        })
    })
})

 
    