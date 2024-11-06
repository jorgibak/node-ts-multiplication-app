// import {yarg} from '../pligins/yargs.plugin';

const runCommand = async(args: string[]) => { // set new values from argv
    process.argv=  [...process.argv,...args];

    const {yarg} = await import('./yargs.plugin');

    return yarg;
}

describe('Test yargs.plugin.test', () => {
  
    test('should return default values', async() => {

        const argv = await runCommand(['-b', '5']);

        expect(argv).toEqual(expect.objectContaining({
                b: 5,
                l: 10,
                s: false,
                n: 'multiplication-table',
                d: 'outputs',
            
        }));      

    });

});
