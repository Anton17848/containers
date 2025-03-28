import ErrorRepository from '../map';


test(`getExistsError`, ()=>{
    const errorRepository = new ErrorRepository();
    expect(errorRepository.translate(1)).toBe(`Error1`);
})

test(`getNoExistsError`, ()=>{
    const errorRepository = new ErrorRepository();
    expect(()=>errorRepository.translate(3)).toThrow()
})