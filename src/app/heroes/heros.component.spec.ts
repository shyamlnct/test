import {HeroesComponent} from './heroes.component';

describe('Testing heroes state in heroes.component', () => {
  let app: HeroesComponent;

  beforeEach(() => {
    app = new HeroesComponent();
  });

  it('should  heroes', () => {
    
    expect(app.test()).toBe('hello world');
  });

 
});