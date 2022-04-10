describe('New Arrivals Component Test', function() {

    let component;
  
    before(async () => {
      component = await browser.mountVueComponent('/src/components/new-arrivals/NewArrivals.vue', {
        plugins: {
          router: '/src/lib/router.js'
        }
      })
    });
  
    it('checks if the component has been mounted', function(browser) {
      expect(component).to.be.present;
      expect(component).to.have.property('newArrivals');
      expect(component).text.toContain('The Memory Police')
  
      expect.elements('div.col-md-6').count.toEqual(4);       expect(component.property('newArrivals')).to.be.an('array').with.length(1);   
    });
  });