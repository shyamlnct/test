import { DefaultPipe } from './default.pipe'
describe('test the pipe:tansform',()=>{
    let pipe:DefaultPipe;
    beforeEach(()=>{
        pipe=new DefaultPipe();
    });
    it('Url with correct url no transformation needed',()=>{
            expect(pipe.transform('','http://www.google.com',true)).toBe("http://www.google.com")
    });
});